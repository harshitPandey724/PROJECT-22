var starImg,bgImg,fairyImage,fairy,fairyVoice,start,startI;
var star, starBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	fairyImage = loadAnimation("fairyImage1.png","fairyImage2.png");
	fairyVoice = loadSound("JoyMusic.mp3");
	
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	fairyVoice.play()

	//create fairy sprite and add animation for fairy

	

	fairy = createSprite(400,350)
	fairy.addAnimation("image",fairyImage);
	fairy.scale = 0.2;
        fairy.setCollider("circle",500,-15,100)

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  if (fairy.isTouching(star)){
       
	fairy.velocityX = 0;
	fairy.velocityY = 0;
	Matter.Body.setStatic(starBody,true)

	

	



  }

  console.log(star.y);

  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if (keyCode === LEFT_ARROW){
		 
		 fairy.velocityX = -5;
	}

	if (keyCode === RIGHT_ARROW){
		 
		fairy.velocityX = 5;
   }

	//writw code to move fairy left and right
	
}
