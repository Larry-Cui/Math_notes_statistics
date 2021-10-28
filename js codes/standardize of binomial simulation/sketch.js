var n;
var p;
var Px;
var fx;
var Z;
var t;


function setup() 
{
  createCanvas(800, 600);
}

function factorial(n)
{
  if(n==0) 
  {
    return(1);
  }
  else 
  {
    return(n*factorial(n-1));
  }
}

function combi(n, r)
{
  return(factorial(n) / (factorial(r) * factorial(n-r)) )
}

function power(a, b)
{
  return (exp(b * log(a) ) );
}


function draw() 
{
  background(240);

  stroke(50);
  strokeWeight(0.5);
  line(0, 500, 800, 500);
  line(200, 100, 200, 550);

  p = map(mouseX, 0, width, 0.01, 0.99, true);
  n = floor (map(mouseY, 0, height, 10, 50, true));

  textSize(20);
  fill(155, 0, 0);
  text("n=" + n, 500, 200);
  text("p=" + p, 500, 220);


  if (n*p > 10 && n*(1-p) > 10)
  {
    fill(0, 255, 0);
    text("Good Approximation!", 300, 550);
  }
  else
  {
    fill(255, 0, 0);
    text("Bad Approximation!", 300, 550)
  }


  for (k=0; k < n+1; k++)
  {
    Px = combi(n, k) * power(p, k) * power((1-p), (n-k));
    strokeWeight(0.5);
    stroke(200);
    fill(139, 0, 0, 100);
    rect(200 - 5 + k*10, 500 - Px*800, 10, Px*800);
  }
  
  
  Z = sqrt(n / (p* (1-p))); //Z is the scope of normalized Sn (Sn = 0, 1, 2, 3,...)
  text("Z=" + Z, 500, 250);

  stroke(0, 139, 0, 100);
  strokeWeight(1.5);
  
  for (i=0; i < Z * 10 + 1; i++)
  {
    t = - sqrt(n * p / (1-p)) + i* 0.1; 
    fx = exp(-(t*t / 2)) / sqrt (2 * PI);
    line ( 200 - sqrt(n * p / (1-p)) * 10 + i, 500, 200 - sqrt(n * p / (1-p)) * 10 + i, 500 - fx * 800);
  }

}
