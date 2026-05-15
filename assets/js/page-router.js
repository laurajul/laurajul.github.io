/**
 * page-router.js
 *
 * Intercepts internal navigation and swaps only the header + main content,
 * leaving the video grid, cursor, and all scripts alive in the DOM.
 */
(function () {
  const cache = new Map();

  // src URLs of data-once scripts that have already been loaded.
  var _executedOnceScripts = new Set();

  // Re-runs <script> elements inside container in document order.
  // External scripts marked data-once are skipped after their first load.
  function reExecuteScripts(container, done) {
    var scripts = Array.from(container.querySelectorAll('script'));
    function next(i) {
      if (i >= scripts.length) { if (done) done(); return; }
      var old = scripts[i];
      var s = document.createElement('script');
      Array.from(old.attributes).forEach(function (a) {
        if (a.name !== 'data-once') s.setAttribute(a.name, a.value);
      });
      if (old.src) {
        if (old.dataset.once !== undefined && _executedOnceScripts.has(old.src)) {
          old.remove();
          next(i + 1);
          return;
        }
        s.addEventListener('load', function () {
          if (old.dataset.once !== undefined) _executedOnceScripts.add(s.src);
          next(i + 1);
        });
        s.addEventListener('error', function () { next(i + 1); });
        old.parentNode.replaceChild(s, old);
      } else {
        s.textContent = old.textContent;
        old.parentNode.replaceChild(s, old);
        next(i + 1);
      }
    }
    next(0);
  }

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

      document.dispatchEvent(new Event('page:beforenavigate'));

      // Swap header (updates active nav link)
      var newHeader = doc.querySelector('header');
      var oldHeader = document.querySelector('header');
      if (newHeader && oldHeader) oldHeader.replaceWith(newHeader.cloneNode(true));

      // Swap main content
      var newMain = doc.querySelector('.container[role="main"]');
      var oldMain = document.querySelector('.container[role="main"]');
      if (!newMain || !oldMain) { window.location.href = url; return; }
      var cloned = newMain.cloneNode(true);
      oldMain.replaceWith(cloned);

      document.title = doc.title;
      updateBodyPageClasses(doc.body);

      // Update video grid overlay text
      var newOverlay = doc.querySelector('.overlay-title');
      var oldOverlay = document.querySelector('.overlay-title');
      if (newOverlay && oldOverlay) oldOverlay.textContent = newOverlay.textContent;

      if (pushState) history.pushState(null, '', url);
      window.scrollTo(0, 0);

      reExecuteScripts(cloned, function () {
        document.dispatchEvent(new Event('page:navigated'));
      });
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
