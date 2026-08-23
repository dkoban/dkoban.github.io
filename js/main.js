document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.site-header');
  var navToggle = document.getElementById('navToggle');
  var siteNav = document.getElementById('siteNav');

  navToggle.addEventListener('click', function () {
    var isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  siteNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 10);
  });

  var navLinks = siteNav.querySelectorAll('a[href^="#"]');
  var sections = Array.from(navLinks)
    .map(function (link) { return document.querySelector(link.getAttribute('href')); })
    .filter(Boolean);

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var link = siteNav.querySelector('a[href="#' + entry.target.id + '"]');
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach(function (l) { l.classList.remove('active'); });
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });

  sections.forEach(function (section) { observer.observe(section); });
});
