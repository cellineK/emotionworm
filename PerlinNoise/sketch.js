//var xoff = 0;
//var yoff = 5;
var inc = 0.01;
var star = 0;
function setup() {
  createCanvas(400,400);
}

function draw() {
  background(250,210,240);
  beginShape();
  var xoff = star;
  
  for (var x = 0 ; x < width ; x++){
    noFill();
    stroke(240,20,25);

    var y = noise(xoff)*height;
    vertex(x,y);
    
    xoff += inc;
  }
  
  endShape();
star += 0.01;
//  var x = map(noise(xoff),0,1,0,width);
//  var y = map(noise(yoff),0,1,0,height);
  
//  xoff += 0.01;
//  yoff += 0.01;
  
//  ellipse(x, y, 24, 24);
}