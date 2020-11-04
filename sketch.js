
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var box1, box2, box3;
var world, engine;
var dustbinImg;

function preload(){
	dustbinImg = loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	background(255);
	
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(150, 600, 35);

	ground = new Ground(width/2, 690, width, 20);

	box1 = new Dustbin(600, 670, 150, 20);
	box2 = new Dustbin(675, 605, 20, 150);
	box3 = new Dustbin(525, 605, 20, 150);

	Engine.run(engine);

}




function draw() {
	Engine.update(engine);
	background(255);
	drawSprites();
	paper.display();
	ground.display();
	box1.display();
	box2.display();
	box3.display();
	imageMode(CENTER);
	image(dustbinImg, 600, 605, 170, 150);
  }
  
  function keyPressed() {
   if (keyCode === UP_ARROW) {
	  // Look at the hints in the document and understand how to make the package body fall only on
	  Matter.Body.applyForce(paper.body, paper.body.position,{ x:55,y:-55})
	}
  }