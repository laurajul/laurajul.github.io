document.addEventListener('DOMContentLoaded', () => {
  // --- Parameters from the "grid" animation logic ---
  const frameRate = 15;
  const frameStep = 1 / frameRate;
  const reverseSpeedFactor = 2.1;

  const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (isMobile) return;

  // --- Layout structure from your first script ---
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    const video = card.querySelector('.project-video');
    if (!video) return;

    // Ensure video is set up correctly
    video.muted = true;
    video.loop = false;
    video.playsInline = true;

    // --- This is the animation logic you requested from the grid script ---
    let reversing = false;
    let pointerInside = false; // Added to track state for the 'ended' event

    video.addEventListener('loadeddata', () => {
      video.pause();
      video.currentTime = 0;
    });

    // Hover interaction for desktop
    card.addEventListener('pointerenter', () => {
      pointerInside = true;
      reversing = false;
      // Make sure we start from the beginning if it's at the end
      if (video.currentTime >= video.duration) {
          video.currentTime = 0;
      }
      video.play().catch((error) => {
        console.warn(`Autoplay failed on pointerenter:`, error);
      });
    });

    card.addEventListener('pointerleave', () => {
      pointerInside = false;
      // This immediate pause is a key part of this logic
      video.pause();
      reversing = true;

      const reverse = () => {
        if (!reversing) return; // Stop if the mouse re-enters

        if (video.currentTime <= frameStep) {
          video.currentTime = 0;
          video.pause();
          reversing = false;
        } else {
          video.currentTime -= frameStep;
          // This specific timing logic is from your script
          setTimeout(() => requestAnimationFrame(reverse), (1000 / frameRate) * reverseSpeedFactor);
        }
      };

      requestAnimationFrame(reverse);
    });

    // Logic to handle the video ending while the cursor is still on the card
    video.addEventListener('ended', () => {
      // Only pause if the pointer is still inside, otherwise let the pointerleave handle it
      if (pointerInside) {
        video.pause();
        // Ensure it stays on the last frame
        video.currentTime = video.duration;
      }
    });
  });
});