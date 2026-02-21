/**
 * card-video.js
 *
 * On hover: steps forward frame-by-frame at 10 fps.
 * Holds on the last frame while the cursor stays.
 * On leave: steps backward at the same rate until back to frame 0.
 *
 * Runs on initial load and after client-side navigation (page:navigated).
 */
function initCardVideos() {
  var frameRate = 10;
  var frameStep = 1 / frameRate;
  var interval = 1000 / frameRate;

  document.querySelectorAll('.project-card').forEach(function (card) {
    if (card._cardVideoInit) return;
    card._cardVideoInit = true;

    var video = card.querySelector('.project-video');
    if (!video) return;

    video._forward = false;
    video._reversing = false;

    function stepForward() {
      if (!video._forward) return;
      var duration = video.duration;
      if (!duration || isNaN(duration)) return;

      if (video.currentTime + frameStep >= duration) {
        video.currentTime = duration;
        video._forward = false; // hold on last frame until cursor leaves
        return;
      }

      video.currentTime += frameStep;
      setTimeout(function () { requestAnimationFrame(stepForward); }, interval);
    }

    function stepReverse() {
      if (!video._reversing) return;

      if (video.currentTime <= frameStep) {
        video.currentTime = 0;
        video._reversing = false;
        return;
      }

      video.currentTime -= frameStep;
      setTimeout(function () { requestAnimationFrame(stepReverse); }, interval);
    }

    card.addEventListener('pointerenter', function () {
      video._reversing = false;
      video._forward = true;
      requestAnimationFrame(stepForward);
    });

    card.addEventListener('pointerleave', function () {
      video._forward = false;
      video._reversing = true;
      requestAnimationFrame(stepReverse);
    });
  });
}

document.addEventListener('DOMContentLoaded', initCardVideos);
document.addEventListener('page:navigated', initCardVideos);
