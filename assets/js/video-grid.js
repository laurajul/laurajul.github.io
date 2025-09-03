window.addEventListener('load', () => {
  const videoFolder = 'assets/video/video-grid/webm/';
  const frameRate = 15;
  const frameStep = 1 / frameRate;
  const reverseSpeedFactor = 4;
  const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const grid = document.getElementById('videoGrid');
  if (!grid) {
    console.warn('videoGrid element not found');
    return;
  }

  // ✅ Use smaller grid on mobile
  const tileCount = isMobile ? 2 * 4 : 8 * 4;

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
        // Desktop hover interaction
        video.addEventListener('pointerenter', () => {
          reversing = false;
          video.play().catch(() => {});
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

    // ✅ Mobile autoplay (slower, random)
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
        }, 2000); // play 2 seconds
      }, 4000); // every 4 seconds
    }

    document.body.style.visibility = 'visible';
  }

  init();
});
