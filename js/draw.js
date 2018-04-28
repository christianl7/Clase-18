//var container = document.getElementById('container')
var	canvas, context;
var	maxWidth, maxHeight;
var time = new Date().getTime();

function init(){
	canvas = document.createElement ("canvas")
	context = canvas.getContext("2d")
	//container.appendChild(canvas);
	document.body.appendChild(canvas);

	window.addEventListener("resize", SetSize);
}

function SetSize(){
	maxWidth = window.innerWidth;
	maxHeight = window.innerHeight;
	canvas.width = maxWidth;
	canvas.height = maxHeight
}

function animate(){
	requestAnimationFrame(animate);
	time = new Date().getTime();
	render();
}

function render(){
	context.fillStyle = "red";
	context.fillRect(0, 0, 100, 100);

}

init();
animate();