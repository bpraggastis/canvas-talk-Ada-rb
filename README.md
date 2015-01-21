**A Brief Introduction to Canvas** <br>Brenda PraggastisThe canvas element in HTML5 creates a block in an HTML page where JavaScript may create and manipulate bitmap graphics.  Some excellent examples of the use of the canvas element may be found  here: <a href='http://code.tutsplus.com/articles/21-ridiculously-impressive-html5-canvas-experiments--net-14210'>21 Ridiculously Impressive HTML5 Experiments</a><a href='http://davidwalsh.name/canvas-demos'>More Examples</a>For my <a href='https://bp-draw.herokuapp.com/' >Christmas Holiday Project </a>I followed a <a href='https://www.youtube.com/watch?v=m4sioSqlXhQ'> tutorial </a> from  PHPAcademy on YouTube  which created a simple drawing app in php. I used the ideas to create a drawing app in Rails.   The code for the project may be found in my Github account: <a href= 'https://github.com/bpraggastis/bp-draw-ada-holiday-project'>https://github.com/bpraggastis/bp-draw-ada-holiday-project.</a> In this talk I will outline how the canvas element is accessed using javascript  by working through some simple examples.**Example 1:**On the HTML page the canvas element creates a space where graphics may be placed. 

	<canvas id=’paper’>Alternate Text</canvas>
	
	The canvas has two sets of dimensions: one for the drawing and one for the element. The default size is 150x300px. The element dimensions size the canvas with respect to the HTML page.The drawing dimensions indicate the coordinate grid of the canvas for all of the references in JavaScript.Both sets of dimensions may be set by adding width= and height=  attributes to the canvas element. If you set them differently you must watch that you don’t distort the graphics. In general note that the CSS attributes associated with the canvas  element should be minimal as it can interfere with the drawing. All of the graphics and manipulation of graphics will be handled by JavaScript.JavaScript interacts with the canvas through its context:
```markup
canvas = document.getElementById(‘paper’);	context = canvas.getContext(‘2d’);
 ````

The context has methods which will build graphics:
- Example-Arc: <br>

`context.arc(x, y, radius, start-angle-radians, stop-angle-radians, counterclockwise=false);`
- Example-Rectangle: `context.rect(x, y, dx, dy);`
To see an object you need either .fill() or .stroke(). 
```markupcontext.fillStyle() = ‘green’;  //default color is blackcontext.fill();context.strokeStyle() = ‘blue’;context.stroke();
```To separate objects start the series of commands for each object with:<br>`context.beginPath();`<br>To add an image to the context, first reference the source for the image in an img tag on the HTML page:

```markup
<div style="display:none">
<img id="cat" src="cat-image.jpeg" alt=""  />
</div>
```
<br>
Then use JavaScript to get the element by its id and place the image on the canvas:
```markupimage = context.document.getElementById(‘cat’);context.drawImage(image, topleft-x, topleft-y); 
     // note that there are additional arguments for capturing part of an image and resizing.
```**Example2:**If we attach an event listener to the canvas element then we can have graphics appear in response to an event. In this example the dots are created in response to a click event.**Example3:**We can turn the dots into a continuous line by connecting the dots. Note the position of the context.beginPath() commands. This starts a new path every time a dot or a line segment is drawn.**Example4:**We may have multiple canvases and contexts on the same page. **Example5:**We may set the canvas to take up the entire page.**Example6:**We may animate our drawing by creating a draw handler, which repeats after so many micro-seconds.