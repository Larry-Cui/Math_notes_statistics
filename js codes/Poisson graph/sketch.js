// this is a cdf and pdf graph of a Poisson distribution
var cdf;
var pdf;
var lambda;

function setup() 
{
  createCanvas(1500, 500);
  lambda = 0.1;
}

function draw() 
{
  background(220);
  for(i=0; i<500; i++)
  {
    cdf = 1 - exp (-lambda * i/10);
    pdf = lambda * exp (-lambda * i/10); 
    
    stroke(64, 224, 208, 150);

    //draw cdf
    line(i+100, height - 100, i+100, height - 100 - cdf*350);

    //draw pdf
    line(i + 800, height - 100, i + 800, height - 100 - pdf*2000);
  }
}
