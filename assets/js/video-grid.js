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

  // ✅ Use smaller grid on mobile (3 cols × 4 rows = 12 tiles)
  const tileCount = isMobile ? 1 * 4 : 6 * 4;

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

      video._reversing = false;

      function startReverse(v) {
        v.pause();
        v._reversing = true;
        const reverse = () => {
          if (!v._reversing) return;
          if (v.currentTime <= frameStep) {
            v.currentTime = 0;
            v.pause();
            v._reversing = false;
          } else {
            v.currentTime -= frameStep;
            setTimeout(() => requestAnimationFrame(reverse), (1000 / frameRate) * reverseSpeedFactor);
          }
        };
        requestAnimationFrame(reverse);
      }

      video.addEventListener('loadeddata', () => {
        video.pause();
        video.currentTime = 0;
      });

      if (!isMobile) {
        // Desktop hover interaction
        video.addEventListener('pointerenter', () => {
          video._reversing = false;
          video.play().catch(() => {});
        });

        video.addEventListener('pointerleave', () => {
          startReverse(video);
        });

        video.addEventListener('ended', () => {
          video.pause();
        });
      }

      grid.appendChild(video);
      videos.push(video);
    }

    // Mobile autoplay (random, slow playback, gradual reverse)
    if (isMobile) {
      setInterval(() => {
        const rand = Math.floor(Math.random() * videos.length);
        const vid = videos[rand];
        if (!vid) return;

        vid._reversing = false;
        vid.currentTime = 0;
        vid.playbackRate = 0.5;
        vid.play().catch(() => {});
        setTimeout(() => {
          startReverse(vid);
        }, 2000);
      }, 4000);
    }

    document.body.style.visibility = 'visible';
  }

  init();
});
