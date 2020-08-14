
const Engine  = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var pillar , pillar1;
var body , world , engine;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  // giving co-ordinates f pillar and pillar1
  pillar = new PILLAR(200, 200, 50, 50);
  pillar1 = new PILLAR(200 , 200 , 50 , 50);
  //tomb = (12 , 23 , width , 0.5)
function draw() {
  
  background("black"); 
  pillar.display();
  pillar1.display();
  drawSprites();
}
}