let snake;
let rez=20;
let w;
let h;
let food;

function setup() {
  createCanvas(400, 400);
  frameRate(5);
  w = floor(width/rez);
  h = floor(height/rez);
  snake = new Snake();
	foodLocation();
  
}

function draw() {
  background(220);
  scale(rez);
  if(snake.eat(food)){
  	foodLocation();
  }
  snake.update();
  snake.show();
  
  if(snake.endGame()){
  	background(255,0,0);
    print('End Game');
    noLoop();
  }
  
  noStroke();
  fill(255,0,0);
  rect(food.x,food.y,1,1);
  
}

function foodLocation(){
	let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x,y);
  
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1,0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1,0);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0,-1);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0,1);
  }
}

