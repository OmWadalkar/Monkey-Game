
var monkey , monkey_running
var ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,800,10);
  ground.velocityX=-4;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
spawnbanana();
spawnobstacle();
if(ground.x>0){
  ground.x=ground.width/2;
}
if(keyDown("space")){
  monkey.velocityY=-15;
}
if(obstacleGroup.isTouching(monkey)){
  ground.velocityX = 0; 
  monkey.velocitysetVelocityY = 0; 
  obstacleGroup.setVelocityXEach(0);
  FoodGroup.setVelocityXEach(0); 
  obstacleGroup.setLifetimeEach(-1); 
  FoodGroup.setLifetimeEach(-1);
}
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
background("white");
drawSprites(); 
stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time :"+survivalTime,100,50);
}
function spawnbanana(){
  if(frameCount%80===0){
    banana = createSprite(400,Math.round(random(150,230)),10,10);
    banana.addImage("banana",bananaImage);
    banana.velocityX=-3;
    banana.lifetime=150;
    banana.scale=0.1;
    FoodGroup.add(banana);
  }
}
function spawnobstacle(){
  if(frameCount%300===0){
    obstacle = createSprite(400,Math.round(random(295,335)),10,10);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.velocityX=-3;
    obstacle.lifetime=150;
    obstacleGroup.add(obstacle);
     obstacle.setCollider("circle",0,0,50);
    obstacle.debug=true;
    obstacle.scale=0.1;
  }
}



