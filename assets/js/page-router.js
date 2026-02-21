/**
 * page-router.js
 *
 * Intercepts internal navigation and swaps only the header + main content,
 * leaving the video grid, cursor, and all scripts alive in the DOM.
 */
(function () {
  const cache = new Map();

  function fetchPage(url) {
    if (cache.has(url)) return Promise.resolve(cache.get(url));
    return fetch(url, { credentials: 'same-origin' })
      .then(function (r) {
        if (!r.ok) return null;
        return r.text();
      })
      .then(function (html) {
        if (html) cache.set(url, html);
        return html;
      });
  }

  // Prefetch on hover so navigation feels instant
  function prefetch(url) {
    if (!cache.has(url)) fetchPage(url);
  }

  function updateBodyPageClasses(newBody) {
    // Remove old page-specific classes, add new ones
    Array.from(document.body.classList)
      .filter(function (c) { return c === 'home-page' || c.startsWith('page-'); })
      .forEach(function (c) { document.body.classList.remove(c); });
    Array.from(newBody.classList)
      .filter(function (c) { return c === 'home-page' || c.startsWith('page-'); })
      .forEach(function (c) { document.body.classList.add(c); });
  }

  function navigate(url, pushState) {
    fetchPage(url).then(function (html) {
      if (!html) { window.location.href = url; return; }

      var doc = new DOMParser().parseFromString(html, 'text/html');

      // Swap header (updates active nav link)
      var newHeader = doc.querySelector('header');
      var oldHeader = document.querySelector('header');
      if (newHeader && oldHeader) oldHeader.replaceWith(newHeader.cloneNode(true));

      // Swap main content
      var newMain = doc.querySelector('.container[role="main"]');
      var oldMain = document.querySelector('.container[role="main"]');
      if (!newMain || !oldMain) { window.location.href = url; return; }
      oldMain.replaceWith(newMain.cloneNode(true));

      document.title = doc.title;
      updateBodyPageClasses(doc.body);

      // Update video grid overlay text
      var newOverlay = doc.querySelector('.overlay-title');
      var oldOverlay = document.querySelector('.overlay-title');
      if (newOverlay && oldOverlay) oldOverlay.textContent = newOverlay.textContent;

      if (pushState) history.pushState(null, '', url);
      window.scrollTo(0, 0);
      document.dispatchEvent(new Event('page:navigated'));
    }).catch(function () {
      window.location.href = url;
    });
  }

  function isSamePage(url) {
    return url.pathname === location.pathname && url.search === location.search;
  }

  function isInternal(a) {
    if (!a.href) return false;
    if (a.target === '_blank') return false;
    if (a.hasAttribute('download')) return false;
    var url;
    try { url = new URL(a.href); } catch (e) { return false; }
    return url.origin === location.origin;
  }

  // Intercept clicks
  document.addEventListener('click', function (e) {
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest('a[href]');
    if (!a || !isInternal(a)) return;
    var url = new URL(a.href);
    if (isSamePage(url)) return;
    e.preventDefault();
    navigate(url.href, true);
  });

  // Prefetch on hover
  document.addEventListener('mouseover', function (e) {
    var a = e.target.closest('a[href]');
    if (!a || !isInternal(a)) return;
    var url = new URL(a.href);
    if (!isSamePage(url)) prefetch(url.href);
  });

  // Back / forward
  window.addEventListener('popstate', function () {
    navigate(location.href, false);
  });

  // Seed cache with the current page so back-navigation works immediately
  cache.set(location.href, document.documentElement.outerHTML);
  history.replaceState(null, '', location.href);
})();
