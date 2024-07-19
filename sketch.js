function setup() {
  createCanvas(400, 400,WEBGL);
   background(209, 172, 223)
}

function draw() {
  
  
  
  
  noStroke()
  
  

   rotateY(frameCount * 0.01);


  fill(mouseX,mouseY,200,200)
  stroke(50,30,20)
   quad(-300, -300, 0, 100, -100, 0, 100, 100, 200, -100, 100, -200)
}