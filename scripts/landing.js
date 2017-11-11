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

document.getElementsByClassName('hero-title')[0].onclick = function() {changeGreen()};

 function changeGreen() {
     document.getElementsByClassName('hero-title')[0].style.backgroundColor = "white";
 }
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
