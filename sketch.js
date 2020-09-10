var car,wall,weight,speed;

function setup() {
var canvas = createCanvas(1400,400)
speed = random(55,90);
weight = random(400,1500);
car = createSprite(50,200,100,20);
car.shapeColor = color(0,0,0)
//car.debug = "true";
wall = createSprite(1300,200,60,height/2);
wall.shapeColor = color(0,0,0);
}

function draw() {
  background(255,255,255); 
  car.velocityX = speed;
  var deformation = 0.5*weight*speed*speed/22500;

  

  if(wall.x-car.x < (car.width+wall.width)/2){
 
    car.velocityX = 0;
  
    if(deformation<100) {
    car.shapeColor = color(0,255,0);
    }
  
    if (deformation>100 && deformation<180){
   car.shapeColor = color(230,230,0);
    }
  
    if(deformation>180){
    car.shapeColor  = color(255,0,0);
    }
    }
  drawSprites();
  }