
const Engine  = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var pillar , pillar1 , pillar2 , pillar3 , pillar4 , pillar5 , pillar6 , top , top1 , top2 , ground ;
var body , world , engine;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  // giving co-ordinates f pillar and pillar1
 pillar= new PILLAR(rect(70, 200, 50, 200));
 pillar1= new PILLAR(rect(50, 100, 15, 300));
 pillar2= new PILLAR(rect(355, 100, 15, 300));
 pillar3= new PILLAR(rect(300, 200, 50, 200));
 pillar4= new PILLAR(rect(120, 250, 50, 150));
 pillar5= new PILLAR(rect(250, 250, 50, 150));
 pillar6= new PILLAR(rect(170, 280, 80, 120));
 top= new PILLAR(triangle(65, 200, 95, 150, 125, 200));
 top1= new PILLAR(triangle(355, 200, 325, 150, 295, 200));
 top2= new PILLAR(triangle(170, 280, 215, 160, 250, 280));
 ground=new Ground(750 , 350 , 20 , 30);
function draw() {
  
  background("green"); 
  ground.display();
  ground=color("brown");
  pillar.display();
  pillar=color("pink");
  pillar1.display();
  pillar1=color("pink");
  pillar2.display();
  pilla2r=color("pink");
  pillar3.display();
  pillar3=color("pink");
  pillar4.display();
  pillar4=color("pink");
  pillar5.display();
  pillar5=color("pink");
  pillar6.display();
  pillar6=color("pink");
  top .display();
  top=color("golden");
  top1.display();
  top1=color("golden");
  top2.display();
  top2=color("golden");
  drawSprites();
}
}