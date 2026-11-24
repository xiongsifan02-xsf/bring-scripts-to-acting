window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
  // Legacy carousel / slider helpers (no-op when no matching elements exist)
  bulmaCarousel.attach('.carousel', {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000000,
  });
  bulmaSlider.attach();

  setupAxisVideoFallbacks();
});

/* =========================================================
   Emotion-axis demo — show a placeholder when a video
   file has not been added to assets/Video/ yet.
   ========================================================= */
function setupAxisVideoFallbacks() {
  document.querySelectorAll('.axis-card').forEach(card => {
    const video = card.querySelector('video');
    if (!video) return;

    const markMissing = () => card.classList.add('video-missing');

    // A <source> that fails fires 'error' on the source element, not the video.
    video.querySelectorAll('source').forEach(src => {
      src.addEventListener('error', markMissing);
    });
    video.addEventListener('error', markMissing);

    // If no metadata ever arrives, assume the file is absent.
    video.addEventListener('loadedmetadata', () => card.classList.remove('video-missing'));
    setTimeout(() => {
      if (video.readyState === 0) markMissing();
    }, 2500);
  });
}
