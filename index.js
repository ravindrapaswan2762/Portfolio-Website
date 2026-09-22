// ------------------------------------------------------------------------------- Mobile menu toggle
var menuToggle = document.getElementById('menu-toggle');
var mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', function () {
    var isOpen = mobileMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ------------------------------------------------------------------------------- Smooth Scroll Bar
var navMenuAnchorTag = document.querySelectorAll('.nav-menu a');

for (var i = 0; i < navMenuAnchorTag.length; i++) {
  navMenuAnchorTag[i].addEventListener('click', function (event) {
    event.preventDefault();
    var targetSectionID = this.textContent.trim().toLowerCase();

    if (targetSectionID === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    var targetSection = document.getElementById(targetSectionID);
    if (!targetSection) return;

    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// ------------------------------------------------------------------------------   Progress Bars

// handle scroll event on window
// check whether the skills section container is visible
// reset all bar widths to 0 on entry, then animate each bar to its target width
// target width is stored in the data-bar-width attribute

var progressBar = document.querySelectorAll('.skill-fill');
var skillsContainer = document.getElementById('skill-container');
var animationDone = false;

if (skillsContainer) {
  window.addEventListener('scroll', checkScroll);
}

function initializedBar() {
  for (let bar of progressBar) {
    bar.style.width = 0 + '%';
  }
}

function fillBar() {
  for (let bar of progressBar) {
    let targetWidth = bar.getAttribute('data-bar-width');
    let currentWidth = 0;
    let interval = setInterval(function () {
      if (currentWidth > targetWidth) {
        clearInterval(interval);
        return;
      }
      currentWidth++;
      bar.style.width = currentWidth + '%';
    }, 5);
  }
}

function checkScroll() {
  var coordinates = skillsContainer.getBoundingClientRect();
  if (!animationDone && coordinates.top <= window.innerHeight) {
    fillBar();
    animationDone = true;
  } else if (coordinates.top > window.innerHeight) {
    animationDone = false;
    initializedBar();
  } else if (coordinates.bottom < 0) {
    animationDone = false;
    initializedBar();
  }
}
