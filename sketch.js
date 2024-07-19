function setup() {
  createCanvas(400, 400,WEBGL);
   background(220)
}

function draw() {
  
  rotateY(frameCount * 0.01);

  rotateX(frameCount * 0.01);
  rect(mouseX , mouseY, 55, 55)
  fill(20, 30, 55, 55,20,30)
  stroke(10)
}