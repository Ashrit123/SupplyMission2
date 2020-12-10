var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1,box2,box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6

	box1=createSprite(400,650,200,20)
	box2=createSprite(300,620,20,100)
	box3=createSprite(500,620,20,100)
	box1.shapeColor="red"
	box2.shapeColor="red"
	box3.shapeColor="red"

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.visible=false;
	packageSprite.scale=0.2


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 ,200, 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);

	helicopterBody = Bodies.circle(width/2, 200, 10, 10);
	World.add(world, helicopterBody);
	
	box1=Bodies.rectangle(400,650,200,20,)
	World.add(world,box1)

	box2=Bodies.rectangle(300,620,20,100)
	World.add(world,box2)

	box3=Bodies.rectangle(500,620,20,100)
	World.add(world,box3)

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  	rectMode(CENTER);
  	background(0);
  	packageSprite.x= packageBody.position.x 
  	packageSprite.y= packageBody.position.y 
  	drawSprites();

  	keyPressed();
 
}

function keyPressed() {
	 if (keyCode === DOWN_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only on
		packageSprite.visible=true;
		packageSprite.velocityY=5;
    	Matter.Body.setStatic(packageBody, false);
  	}
}



