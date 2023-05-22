 

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

