var pointsArray = document.getElementsByClassName('point');

var revealPoint = function(point) {
    point.style.opacity = 1;
    point.style.transform = "scaleX(1) translateY(0)";
    point.style.msTransform = "scaleX(1) translateY(0)";
    point.style.WebkitTransform = "scaleX(1) translateY(0)";
};

var animatePoints = function(points) {
    forEach(points, revealPoint);

 };

// document.getElementsByClassName('hero-title')[0].onclick = function() {changeBackground()};
//
//  function changeBackground() {
//      document.getElementsByClassName('hero-title')[0].style.backgroundColor = "white";
//  }

// select element and set it to a variable
var heroTitle = document.getElementsByClassName('hero-title')[0];

// make a function to do what we want to do
var clickChangeBackground = function() {
   heroTitle.style.backgroundColor = "white";
};

// run the function on the hero title on click
heroTitle.addEventListener("click", clickChangeBackground);

heroTitle.onclick = function() {
    clickChangeBackground();
};


 window.onload = function() {
     // Automatically animate the points on a tall screen where scrolling can't trigger the animation
     if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     }


     window.addEventListener('scroll', function(event) {
         if (pointsArray[0].getBoundingClientRect().top <= 500) {
              animatePoints(pointsArray);
          }
      });
 }
