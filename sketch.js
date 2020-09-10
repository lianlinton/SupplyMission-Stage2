var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

engine = Engine.create();
world = engine.world;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	//Creating the red box
	sidebox1Sprite=createSprite(width/2-100, height-85, 20, 100);
	sidebox1Sprite.shapeColor=color("red");
	
	sidebox2Sprite=createSprite(width/2+100, height-85, 20, 100);
	sidebox2Sprite.shapeColor=color("red");

	bottomBoxSprite=createSprite(width/2, height-45, 200, 20);
	bottomBoxSprite.shapeColor=color("red");

	//Creating the red box body
	sidebox1 = Bodies.rectangle(width/2-100, height-85, 20, 100, {isStatic: true} );
	World.add(world, sidebox1);

	sidebox2 = Bodies.rectangle(width/2+100, height-85, 20, 100, {isStatic: true} );
	World.add(world, sidebox2);

	bottomBox = Bodies.rectangle(width/2, height-45, 200, 20, {isStatic: true} );
	World.add(world, bottomBox);
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.75, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y;
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic( packageBody, false);
  }
}



