var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,150,15);
  bullet.shapeColor = ("white");
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = ("red");

  bullet.velocityX = speed;
}

function draw() {
  background(33,47,60);

  if(abs(bullet.x-wall.x) <= (bullet.width/2 + wall.width/2)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
     if(damage > 10){
       wall.shapeColor = ("yellow");
     }
     if(damage < 10){
       wall.shapeColor = ("green");
     }
  }
  drawSprites();


}