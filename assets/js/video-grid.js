document.addEventListener('DOMContentLoaded', () => {
  const videoFolder = '/assets/video/video-grid/webm/';
  const frameRate = 10;
  const frameStep = 1 / frameRate;
  const reverseSpeedFactor = 4;
  const rowHeight = 150;
  const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const grid = document.getElementById('videoGrid');
  if (!grid) {
    console.warn('videoGrid element not found');
    return;
  }

  const cols = isMobile ? 2 : 6;
  const rows = Math.ceil(window.innerHeight / rowHeight);
  const tileCount = cols * rows;

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

  function init() {
    const videos = [];

    for (let i = 1; i <= tileCount; i++) {
      const index = String(((i - 1) % 20) + 1).padStart(2, '0');
      const posterUrl = `${videoFolder}thumbnails/${index}.webp`;

      const video = document.createElement('video');
      video.src = `${videoFolder}${index}.webm`;
      video.className = 'video-tile poster-loaded';
      video.muted = true;
      video.loop = false;
      video.preload = 'auto';
      video.playsInline = true;
      video.poster = posterUrl;
      video._reversing = false;

      video.addEventListener('loadeddata', () => {
        video.pause();
        video.currentTime = 0;
      });

      if (!isMobile) {
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
      } else {
        video.addEventListener('ended', () => {
          startReverse(video);
        });
      }

      grid.appendChild(video);
      videos.push(video);
    }

    // Mobile: randomly trigger a video every 4 seconds;
    // it plays at half speed to end, then reverses gradually
    if (isMobile) {
      setInterval(() => {
        const rand = Math.floor(Math.random() * videos.length);
        const vid = videos[rand];
        if (!vid || vid._reversing) return;

        vid._reversing = false;
        vid.currentTime = 0;
        vid.playbackRate = 0.5;
        vid.play().catch(() => {});
      }, 4000);
    }
  }

  init();
});
