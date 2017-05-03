var jake,mainText;
function preload()
{
  jake=loadImage("data/jakeBanana.png");
  mainText=loadStrings("data/portfolio.txt");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  textAlign(CENTER);
  imageMode(CENTER);
  jake.resize(400,600);
  textSize(28);
}

function draw() {
  background(255,0,255);
  image(jake,mouseX,mouseY);
  fill(255,255,255,100)
  rect(width/4,0,width/2,height);
  fill(0);
  for(var i=0; i<mainText.length; i++)
  {
     text(mainText[i],width/4,i*2*height/textSize(),width/2,height);
  }
}