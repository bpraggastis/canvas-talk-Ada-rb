//  Here are a few examples of placing images on a canvas

var canvas = document.getElementById('paper');
var context = canvas.getContext('2d');

// // Draw some filled in circles
// context.beginPath();
// context.arc(150,75,25,0,Math.PI*2);
// context.fill();
//
// context.beginPath();
// context.arc(150,150,25,0,Math.PI*2);
// context.fillStyle = 'green';
// context.fill();
// context.lineWidth = 5;
// context.strokeStyle = "blue";
// context.stroke();
//
// context.beginPath();
// context.arc(0,0,25,0,Math.PI*2);
// context.fillStyle = 'red';
// context.fill();
//
// context.beginPath();
// context.arc(300,0,25,0,Math.PI*2);
// context.fillStyle = 'blue';
// context.fill();
//
// context.beginPath();
// context.arc(0,300,25,0,Math.PI*2);
// context.fillStyle = 'orange';
// context.fill();
//
// context.beginPath();
// context.arc(300,300,25,0,Math.PI*2);
// context.fillStyle = 'violet';
// context.fill();
//
// // Draw a rectangle and its border
// context.beginPath();
// context.rect(30,15,240,30);
// context.lineWidth = 10;
// context.strokeStyle = 'green';
// context.stroke();
// context.fillStyle = 'white';
// context.fill();
//
// // Insert an image into the canvas
// context.beginPath();
// image = document.getElementById('cat');
// context.drawImage(image, 50, 120);
// context.fillStyle = 'black';
// context.font = "20px Arial";
// context.fillText("What a pretty cat!",70,35);
//
// // Getting really fancy now with Bezier Curves!
// context.fillStyle = 'red';
// context.beginPath();
// context.moveTo(0,50);
// context.bezierCurveTo(15,385,100,150, 300,250);
// context.lineTo(300,300);
// context.lineTo(0,300);
// context.closePath();
// context.fill();
// context.lineWidth = 4;
// context.strokeStyle = 'black';
// context.stroke();
