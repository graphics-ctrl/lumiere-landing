// The LUMIÈRE landing page, trial base.
(function () {
  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Trial: the enquiry button is not connected yet
  var cta = document.querySelector('[data-trial-cta]');
  var note = document.getElementById('cta-note');
  if (cta && note) {
    cta.addEventListener('click', function (e) {
      e.preventDefault();
      note.hidden = false;
    });
  }

  // Footer year
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
