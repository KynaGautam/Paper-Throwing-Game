
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var right_wall,left_wall,groundObj
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

    ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,

	}
	ball = Bodies.circle(100,100,50,ball_options);
	 World.add(world,ball);

	right_wall=new Ground(400,50,20,50)
	left_wall=new Ground(350,50,20,50)
	groundObj=new Ground(10,20,800,20)

    
	Engine.update(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  groundObj.display();
  right_wall.display();
  left_wall.display();

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode ===Up_Arrow){
 hForce()
 vForce()
 
	}
}

function hForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0});
}
function vForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}