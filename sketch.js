let startX, startY;
let radius = 20;
let intervalID;

function setup() {
  createCanvas(400, 400);
  background(180, 220, 255); 
  startX = width / 2;
  startY = height / 2;

  
  intervalID = setInterval(moveDot, 2000);

  
  setTimeout(stopMovingDot, 5000);
}

function draw() {
  
  noFill();
  stroke(0, 0, 0, 50); 
  ellipse(startX, startY, radius * 2, radius * 2); 

 
  let endX = random(width);
  let endY = random(height);
  line(startX, startY, endX, endY);
}


function moveDot() {
  startX = random(width);
  startY = random(height);
  radius = random(15, 30); 
}


function stopMovingDot() {
  clearInterval(intervalID); 
  noLoop(); 
}
