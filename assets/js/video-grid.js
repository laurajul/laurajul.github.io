window.addEventListener('load', () => {
//document.addEventListener('DOMContentLoaded', () => {
  const videoFolder = 'assets/video/video-grid/webm/';
  const frameRate = 15;
  const frameStep = 1 / frameRate;
  const tileCount = 8 * 4;
  const reverseSpeedFactor = 4;
  const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const grid = document.getElementById('videoGrid');
  if (!grid) {
   console.warn('videoGrid element not found');
   return;
  }


  if (!grid) {
    console.warn('videoGrid element not found');
    return;
  }

  function preloadAllPosters(tileCount) {
    const promises = [];

    for (let i = 1; i <= tileCount; i++) {
      const index = String(((i - 1) % 20) + 1).padStart(2, '0');
      const posterUrl = `assets/video/video-grid/webm/thumbnails/${index}.jpg`;

      promises.push(
        new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve({ index, posterUrl });
          img.src = posterUrl;
        })
      );
    }

    return Promise.all(promises);
  }

  async function init() {
    const posterData = await preloadAllPosters(tileCount);
    const videos = [];

    for (let i = 1; i <= tileCount; i++) {
      const { index, posterUrl } = posterData[i - 1];

      const video = document.createElement('video');
      video.src = `${videoFolder}${index}.webm`;
      video.className = 'video-tile poster-loaded';
      video.muted = true;
      video.loop = false;
      video.preload = 'auto';
      video.playsInline = true;
      video.poster = posterUrl;

      let reversing = false;

      video.addEventListener('loadeddata', () => {
        video.pause();
        video.currentTime = 0;
      });

      if (!isMobile) {
        // Hover interaction for desktop
        video.addEventListener('pointerenter', () => {
          reversing = false;
          video.play().catch((error) => {
            console.warn(`Autoplay failed on pointerenter for video ${index}:`, error);
          });
        });

        video.addEventListener('pointerleave', () => {
          video.pause();
          reversing = true;

          const reverse = () => {
            if (!reversing) return;
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
          video.pause();
        });
      }

      grid.appendChild(video);
      videos.push(video);
    }

    // Mobile random animation loop
    if (isMobile) {
      setInterval(() => {
        const rand = Math.floor(Math.random() * videos.length);
        const vid = videos[rand];
        if (!vid) return;

        vid.currentTime = 0;
        vid.play().catch(() => {});
        setTimeout(() => {
          vid.pause();
          vid.currentTime = 0;
        }, 1000); // 1 sec of play
      }, 1200); // loop every 1.2s
    }

    document.body.style.visibility = 'visible';
  }

  init();
});