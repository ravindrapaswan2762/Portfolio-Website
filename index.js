 
// ------------------------------------------------------------------------------- Smooth Scroll Bar
var navMenuAnchorTag = document.querySelectorAll('.nav-menu a');
console.log(navMenuAnchorTag);

for (var i = 0; i < navMenuAnchorTag.length; i++) {
  navMenuAnchorTag[i].addEventListener('click', function(event) {
    event.preventDefault();
    var targetSectionID = this.textContent.trim().toLowerCase();
    console.log("targetSectionID", targetSectionID);
    var targetSection = document.getElementById(targetSectionID);
    console.log("targetSection", targetSection);

    var interval = setInterval(function() {
      // Gives section position as an object
      var targetSectionCoordinates = targetSection.getBoundingClientRect();
      console.log("targetSectionCoordinates", targetSectionCoordinates)

      if (targetSectionCoordinates.top <= 0 || targetSectionCoordinates.top==90) {
        clearInterval(interval);
        return;
      }
      window.scrollBy(0, 50);
    }, 20);
  });
}

// ------------------------------------------------------------------------------   Progress Bars

// handle scroll bar event on window
// chech the skills sections container is visible or not
// ensure that initial width of colored skill divsis zeero -> initialised/reset to 0 width value
// start animation on every skill -> increase skill width from 0 to skill level at regular intervals
// store skill level -> html with the help data attribute

var progressBar = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skill-container');
window.addEventListener('scroll', checkScroll);
var animationDone = false;

function initializedBar(){
  for(let bar of progressBar){
    bar.style.width = 0 + '%';
  }
}

function fillBar(){
  for(let bar of progressBar){
    let targetWidth = bar.getAttribute('data-bar-width');
    let currentWidth = 0;
    let interval = setInterval(function(){
      if (currentWidth > targetWidth) {
        clearInterval(interval);
        return;
      }
      currentWidth++;
      bar.style.width = currentWidth + '%';
    }, 5);
  }
}

function checkScroll(){
  // i have to check that whether container is visible
  var coordinates = skillsContainer.getBoundingClientRect();
  if (!animationDone && coordinates.top <= window.innerHeight) {
    console.log('Skill Section Visible');
    fillBar();
    animationDone = true;
  }
  else if(coordinates.top > window.innerHeight){
    animationDone = false;
    initializedBar();
  }
  else if(coordinates.bottom < 0){
    animationDone = false;
    initializedBar();
  }
}