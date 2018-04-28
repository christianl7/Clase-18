//var container = document.getElementById('container')
var	canvas, context;
var	maxWidht, maxHeight;

function init(){
	canvas = document.createElement ("canvas")
	//container.appendChild(canvas);
	document.body.appendChild(canvas);
}

function animate(){
	requestAnimationFrame(animate);
	time = new Date().getTime();
	render();
}

function render(){

}

init();
animate();