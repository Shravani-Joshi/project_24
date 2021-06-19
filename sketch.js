
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render 
var engine,world;
function preload()
{
	
}

function setup() {
	createCanvas(900, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject  = new paper(200,450,40);
	dustbinObject = new dustbin(1200,650);
	  
	groundObject = new ground(width/2,670,width,20)

    var render = Render.create({
		element: document.body,
		engine:engine,
		options: {
			width: 1200,
			height:700,
			wireframes:false

		}
	});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  paperObject.display();
  groundObject.display();
  dustbinObject.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyforce(paperObject.body , paperObject.body.position , {x:15 , x:-15});
	}
}





