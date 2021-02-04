var monkey , monkeyRunningAnimation;
var banana , bananaImage , bananaGroup;
var obstacleGroup , obstacle , obstacleImage;
var ground , score , jungleBg , jungleBgImg;

function preload(){
  monkeyRunningAnimation = loadAnimation("sprite_1.png" , "sprite_2.png " , " sprite_3.png " , " sprite_4.png " , " sprite_5.png " , " sprite_6.png " , " sprite_7.png " , " sprite_8.png ");
                                         
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  jungleBgImg = loadImage("jungle.jpg");
}

function setup() {
  
  createCanvas(400,400);
  
  jungleBg = createSprite(10,10,10,10);
  jungleBg.addImage("jungles",jungleBgImg);
  jungleBg.velocityX = -2;
  
  monkey = createSprite(100,308);
  monkey.addAnimation("monkeys",monkeyRunningAnimation);
  monkey.scale = 0.1;
  
  ground = createSprite(30,340,800,10);
  ground.velocityX = -2;
  ground.x = ground.width /2;
  
  obstaclesGroup = new Group();
  bananaGroup  = new Group();
}

function draw() {
  background(1);
  
  spawnObstacles();
  spawnBanana();
  
  if(keyDown("space") && monkey.y > 100) {
    monkey.velocityY = -13;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if(ground.x < 300){
  ground.x = 400;
  }
  
  if(jungleBg.x < 300){
  jungleBg.x = 400;  
  }
  
  if(monkey.isTouching(bananaGroup)){
  monkey.scale = monkey.scale + 0.001;
  bananaGroup.destroyEach();  
  }
  
  if(monkey.isTouching(obstaclesGroup)){
  monkey.scale = monkey.scale - 0.001;
  obstaclesGroup.destroyEach();  
  }
  
  monkey.collide(ground);
  ground.visible = false;
  
  score = getFrameRate();
  
  drawSprites();
}

function spawnObstacles(){
  if(frameCount % 240 === 0){
  obstacles = createSprite(400,320);  
  obstacles.addImage("obstacs",obstacleImage);
  obstacles.velocityX = -2; 
  obstacles.scale = 0.1;
  obstaclesGroup.add (obstacles);
  obstacles.lifetime = 500;
  }}

function spawnBanana(){
  if(frameCount % 240 === 0){
  banana = createSprite(400,180);
  banana.addImage("bananas",bananaImage);
  banana.velocityX = -2;                          
  banana.scale = 0.1;
  bananaGroup.add (banana);
  banana.lifetime = 500;  
  }}
