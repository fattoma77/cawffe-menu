/* ==========================================================================
   Cawffe — menu site
   Shows one menu category at a time. Each category has its own link
   (index.html#hot-coffee, index.html#matcha-bar, ...).
   ========================================================================== */

(function () {
  'use strict';

  var DEFAULT_CATEGORY = 'hot-coffee';
  var SITE_NAME = 'Cawffe';

  var sections = Array.prototype.slice.call(document.querySelectorAll('.category'));
  var links = Array.prototype.slice.call(document.querySelectorAll('.cat-link'));

  function showCategory() {
    var id = window.location.hash.replace('#', '');

    var exists = sections.some(function (section) {
      return section.dataset.cat === id;
    });
    if (!exists) {
      id = DEFAULT_CATEGORY;
    }

    sections.forEach(function (section) {
      var isActive = section.dataset.cat === id;
      section.hidden = !isActive;
      if (isActive) {
        document.title = section.dataset.title + ' · ' + SITE_NAME;
      }
    });

    links.forEach(function (link) {
      var isActive = link.dataset.cat === id;
      link.classList.toggle('is-active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  window.addEventListener('hashchange', showCategory);
  showCategory();
})();
