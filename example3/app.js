// Here we illustrate drawing curves interactively

var canvas = document.getElementById("paper");
var context = canvas.getContext('2d');

var i = 0;
var rainbow = ['red','orange','yellow','green','blue','indigo','violet'];
var dragging = false;

context.lineWidth = 10;

// putPoint starts by drawing a line to the current position from the last point
// in the active path, (if there is one). Then it draws a circle, begins a new path,
// and ends. If the mouse moves it repeats. If the mouse lifts the process stops.

// We subtract 30 from e.clientX to compensate for the margin 30 in the
// css file which is effecting the position of the drawing.

var putPoint = function(e){
  if(dragging){
    context.lineTo(e.clientX - 30, e.clientY - 30);
    context.stroke();
    context.beginPath();
    context.arc(e.clientX - 30, e.clientY - 30, 15, 0, Math.PI*2);
    context.fillStyle = rainbow[i % 7];
    context.fill();
    context.beginPath();
    context.moveTo(e.clientX - 30, e.clientY - 30);
    console.log(e.target.id, "(",e.offsetX,",", e.offsetY,")", rainbow[i % 7]);
    i++;
  }
};

var engage = function(e){
  dragging = true;
  putPoint(e);
};

var disengage = function(){
  dragging = false;
  context.beginPath();
};

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);
