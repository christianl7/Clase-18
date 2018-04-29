//var container = document.getElementById('container')
Math.distance = function(a, b){
	return Math.sqrt (Math.pow((a.x-b.x), 2) + Math.pow((a.y-b.y), 2) );
	//Teorema de pitagoras para sacara el resultado de la distancia entre 2 puntos.
}
var canvas, context;
var maxWidth, maxHeight;
//var time = new Date().getTime();
//var	  particle = {
//	x: Math.random() * window.innerWidth,
//	y: Math.random() * window.innerHeight,
//	radius: (Math.random() *10) + 3
//} PREGUNTAR De

var particles = [];
var particleCounter = 100;
var PI2 = Math.PI * 2;
var minDistance = 60;

//Canvas es un tag para dibujar
function init() {
    canvas = document.createElement("canvas")
    context = canvas.getContext("2d")
        //container.appendChild(canvas);
    document.body.appendChild(canvas);

    setParticles();
    SetSize();

    window.addEventListener("resize", SetSize);
}

function setParticles() {
    for (var i = 0; i < particleCounter; i++) {
        var particle = new Particle();
        particles.push(particle);
    };
}

function SetSize() {
    maxWidth = window.innerWidth;
    maxHeight = window.innerHeight;
    canvas.width = maxWidth;
    canvas.height = maxHeight
}

function animate() {
    requestAnimationFrame(animate);
    //time = new Date().getTime();
    render();
}

var Particle = function(args) {
    if (args === undefined) args = {};
    this.position = {
    	x: x = args.x || (Math.random() * window.innerWidth),
    	y: y = args.y || (Math.random() * window.innerHeight),
    }
    this.alpha = Math.random ()
    this.rgba = "rgba(255, 255, 255," +this.alpha+")";
    this.velocity = { 
    	x: (Math.random()*10) -5,
    	y: (Math.random()*10) -5
    };
    this.radius = args.radius || this.alpha * 4;
    this.draw = function(ctx) {
    	this.update();
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, PI2, false);
        ctx.stroke();
        ctx.fillStyle = this.rgba
        //ctx.strokeStyle = "blue";
        ctx.fill();
        ctx.closePath();

    }
    this.update = function() {
    	this.position.x += this.velocity.x;
    	this.position.y += this.velocity.y;

    	if (this.position.x < 0) this.position.x = canvas.width;
    	if (this.position.y < 0) this.position.y = canvas.height;
    	if (this.position.x > canvas.width) this.position.x	= 0;
    	if (this.position.y > canvas.height) this.position.y = 0;
    }
    	//if (this.position.x > (window.innerWidth+this.radius))	 {
    	//	this.position.x = -this.radius;
    	//}
    	//if (this.position.y > (window.innerWidth+this.radius))	 {
    	//	this.position.y = -this.radius;
    	//}
    	//if (this.position.x <  (0-this.radius) {};
    return this;
}

function render() {
    context.clearRect(0, 0, maxWidth, maxHeight);
	context.strokeStyle = "white";
    for (var i = 0; i < particles.length; i++) {
        var a = particles[i];
        a.draw(context);
        for (var j = i + 1; j < particles.length; j++) {
        	var b =particles [j];
        	var distance = Math.distance(a.position, b.position);
        	if (distance < minDistance){
        		context.beginPath();
        		context.moveTo(a.position.x, a.position.y);
        		context.lineTo(b.position.x, b.position.y);
        		context.lineWidth = (1-(distance / minDistance)) * 2;
        		context.stroke();
        		context.closePath();
        	}
        }
    }
}
init();
animate();