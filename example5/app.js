// This is like the previous examples.
// It effects the color of the dots by using the addHex function.
// It also sets the canvas size to be the entire window.

var canvas = document.getElementById("paper");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context = canvas.getContext('2d')

var i = 0;
var colors = ['FF0000','00FF00','0000FF'];

function addHexColor(c1, c2) {
  var hexStr = (parseInt(c1, 16) + parseInt(c2, 16)).toString(16);
  while (hexStr.length < 6) { hexStr = '0' + hexStr; } // Zero pad.
    return "#" + hexStr;
  }

var putPoint = function(e){
  context.beginPath();
  context.arc(e.offsetX,e.offsetY,30,0,Math.PI*2);
  context.fillStyle = addHexColor(colors[i%3],'0000FF');
  context.fill();
  console.log(e.target.id, "(",e.offsetX,",", e.offsetY,")", colors[i % 3]);
  i += 1;
};

canvas.addEventListener('mousedown', putPoint);
