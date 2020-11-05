const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world =engine.world;
 var options ={
   isStatic :true
   
 }
  ground = Bodies.rectangle(200,350,400,50,options);
  World.add(world,ground);
  console.log(ground);
  
  var ball_options = {
    restitution : 1
  }
  ball = Bodies.circle(100, 200, 10, ball_options);
  World.add(world,ball);
  console.log(ball);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 

rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,50);

ellipseMode(CENTER);
ellipse(ball.position.x,ball.position.y, 20, 20);
}
