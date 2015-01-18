// Here we illustrate how the user may interact with the canvas by
// placing dots where the mouse is clicked.

var canvas = document.getElementById("paper");
var context = canvas.getContext('2d');

var putPoint = function(e){
  context.beginPath();
  context.arc(e.offsetX,e.offsetY,25,0,Math.PI*2);
  context.fillStyle = 'red';
  context.fill();
  console.log("(",e.offsetX,",", e.offsetY,")");
};

canvas.addEventListener('mousedown', putPoint);
