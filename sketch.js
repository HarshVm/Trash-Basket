var  packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 170, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	//helicopterSprite=createSprite(width/2, 200, 10,10);
	//helicopterSprite.addImage(helicopterIMG)
	//helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	box1Sprite=createSprite(340,650,180,20);
	box1Sprite.shapeColor=color("red");
	box2Sprite=createSprite(430,569,20,180);
	box2Sprite.shapeColor=color("red");
	box3Sprite=createSprite(250,569,20,180);
	box3Sprite.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 170 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	
	box1 = Bodies.rectangle(500,650,20,100);
	World.add(world,box1);
	box2 = Bodies.rectangle(350,560,20,180)
	World.add(world,box2);
	box3 = Bodies.rectangle(250,650,20,180)
	World.add(world,box3);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



