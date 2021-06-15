var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83)
  
  bullet = createSprite(50, 75, 50, 20);
  bullet.shapeColor = "black"
  wall = createSprite(1200,200,thickness,width/2)
  
  speed = random(55,90)
  weight = random(400,1500)
}

function draw() {
  background(255,255,255);  

  bullet.velocityX = speed;

  if(wall.x - bullet.x < (bullet.width + wall.width) /2 )
  {

      bullet.velocityX = 0

      var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

      if(damage > 10)
      {
        wall.shapeColor = "red"
      }

      if(damage < 10)
      {
        wall.shapeColor = "green"
      }
  }

  drawSprites();
}