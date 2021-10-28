var p;
var z;

function setup() {
  createCanvas(1000, 500);
}

function draw() {
  background(220);
  for(i=0; i<1000; i++)
  {
    z = (i - width/2) / 100;
    p = exp(-(z*z / 2)) / sqrt (2 * PI);
    console.log(p);
    stroke(64, 224, 208, 150);
    line(i, height, i, height - p*500);
  }
  // noLoop();
}
