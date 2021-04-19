function setup() {
  createCanvas(800,400);
  ob1 = createSprite(400, 200, 50, 50);
  ob2 = createSprite(500, 200, 50, 50);
  ob1.shapeColor = "red";
  ob2.shapeColor = "green";
  ob3 = createSprite(600,200,50,50);
  ob4 = createSprite(300,200,50,50);
  ob3.shapeColor = "black";
  ob4.shapeColor = "grey";
}

function draw() {
  background(255,255,255);  
  ob1.x = mouseX;
  ob1.y = mouseY;
  if(isTouching(ob1,ob3)){

      ob1.shapeColor = "blue";
      ob3.shapeColor = "pink"
    }
    else{
      ob1.shapeColor = "red";      
      ob3.shapeColor = "black"
    }
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      return true
    }
    else {
      return false
    }
}