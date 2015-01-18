// Here we illustrate animation

var canvas = document.getElementById("paper");
var context = canvas.getContext('2d');

var i = 0;
var rainbow = ['red','orange','yellow','green','blue','indigo','violet'];

var putPoint = function(e){
  active = true
  context.beginPath();
  x = e.offsetX;
  y = e.offsetY;
  context.arc(x, y, 10, 0, Math.PI*2);
  context.fillStyle = rainbow[ i % 7];
  context.fill();
  console.log("(", x,",",  y,")");
  i++;
};

setInterval(draw, 10);

function draw(){
  if (active === true) {
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI*2);
    context.fill();
    console.log("(", x,",",  y,")");
    x = (x + 20) % 300;
    y = (y + 10*Math.PI) % 300;
  }
}

function disengage() {
  active = false;
}

canvas.addEventListener('click', putPoint);
canvas.addEventListener('dblclick', disengage);
