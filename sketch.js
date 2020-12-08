
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var roof;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5; 
var rope1,rope2,rope3,rope4,rope5;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(width/2,height/4,width/7,20);

	bobDiameter = 40;

	startBobPositionX = width/2;
	startBobPositionY = height/4 + 500;

	bobObject1 = new Bob(startBobPositionX - bobDiameter*4, startBobPositionY, bobDiameter*2);
	bobObject2 = new Bob(startBobPositionX - bobDiameter*2, startBobPositionY, bobDiameter*2);
	bobObject3 = new Bob(startBobPositionX, startBobPositionY, bobDiameter*2);
	bobObject4 = new Bob(startBobPositionX + bobDiameter*2, startBobPositionY, bobDiameter*2);
	bobObject5 = new Bob(startBobPositionX + bobDiameter*4, startBobPositionY, bobDiameter*2);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*4,0);
	rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*2,0);
	rope3 = new Rope(bobObject3.body,roof.body,0,0);
	rope4 = new Rope(bobObject4.body,roof.body,bobDiameter*2,0);
	rope5 = new Rope(bobObject5.body,roof.body,bobDiameter*4,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  drawSprites();

  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position, {x:-200, y:25});
	}
}

function drawLine(constraint) {
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}
