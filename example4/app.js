// Here we illustrate multiple canvases

var canvas = document.getElementById("paper1");
var canvas2 = document.getElementById("paper2");

var i = 0;
var rainbow = ['red','orange','yellow','green','blue','indigo','violet'];

function addHexColor(c1, c2) {
  var hexStr = (parseInt(c1, 16) + parseInt(c2, 16)).toString(16);
  while (hexStr.length < 6) { hexStr = '0' + hexStr; } // Zero pad.
    return "#" + hexStr;
  }

var ctx = function(id){
  cnvs = document.getElementById(id);
  return cnvs.getContext('2d');
};

var putPoint = function(e){
  context = ctx(e.target.id);
  context.beginPath();
  context.arc(e.offsetX,e.offsetY,10,0,Math.PI*2);
  context.fillStyle = rainbow[i % 7]
  context.fill();
  console.log(e.target.id, "(",e.offsetX,",", e.offsetY,")", rainbow[i % 7]);
  i++;
};

canvas.addEventListener('mousedown', putPoint);
canvas2.addEventListener('mousedown', putPoint);
