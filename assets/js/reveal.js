document.addEventListener('DOMContentLoaded', () => {
  const frameRate = 15;
  const frameStep = 1 / frameRate;
  const reverseSpeedFactor = 2; // Lower is faster rewind. Original was 4.
  const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (isMobile) return;

  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    const video = card.querySelector('.project-video');
    if (!video) return;

    let reversing = false;
    let pointerInside = false;

    video.addEventListener('loadeddata', () => {
      video.pause();
      video.currentTime = 0;
    });

    card.addEventListener('pointerenter', () => {
      pointerInside = true;
      reversing = false;
      video.play().catch(err => {
        console.warn('Video autoplay failed:', err);
      });
    });

    card.addEventListener('pointerleave', () => {
      pointerInside = false;
      video.pause();
      reversing = true;

      const reverse = () => {
        if (!reversing || pointerInside) return;

        if (video.currentTime <= frameStep) {
          video.currentTime = 0;
          video.pause();
          reversing = false;
        } else {
          video.currentTime -= frameStep;
          setTimeout(() => requestAnimationFrame(reverse), (1000 / frameRate) * reverseSpeedFactor);
        }
      };

      requestAnimationFrame(reverse);
    });

    video.addEventListener('ended', () => {
      // Only rewind if the pointer is not over the card
      if (!pointerInside) {
        video.pause();
        card.dispatchEvent(new PointerEvent('pointerleave'));
      }
    });
  });
});
