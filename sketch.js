
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1, ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
paper1 = new Paper(200,400,20,20);
ground1 = new Ground(400,650,800,5);


	Engine.run(engine);
  
}


function draw() {
  background(0);
	paper1.display();
	ground1.display();
	drawSprites();
}










