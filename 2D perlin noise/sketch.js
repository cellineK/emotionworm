var inc = 0.01;

function setup() {
  createCanvas(500,500);
  pixelDensity(1);
}

function draw() {
  noiseDetail(5);
  var yoff = 0;
  loadPixels();

  for(var x= 0; x < width; x ++){
    var xoff = 0;  
    for(var y = 0; y < height; y++){
      var index = (x + y*width)*4;
      var r = noise(xoff,yoff) * 255;
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = 200;
      pixels[index + 3] = 255;
      xoff += inc;
    }
 
   yoff+= inc;      
  }

  updatePixels();
}