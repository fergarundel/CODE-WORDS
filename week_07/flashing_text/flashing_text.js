let intro = ['This', 'appeal', 'is', 'directed', 'to', 'all', 'the', 'people', 'belonging', 'to', 'the', 'European', 'cultural', 'sphere', 'and', 'civilization.', 'The', 'breakthrough', 'to', 'a', 'new', 'social', 'future', 'will', 'be', 'successful', 'if,', 'in', 'the', 'European', 'zones,', 'a', 'movement', 'emerges', 'which', 'tears', 'down', 'the', 'walls', 'between', 'East', 'and', 'West', 'and', 'closes', 'the', 'rift', 'between', 'North', 'and', 'South', 'by', 'its', 'power', 'for', 'renewal.', 'We', 'maintain', 'that', 'a', 'start', 'would', 'be', 'made', 'if', 'the', 'Middle', 'Europeans', 'decide', 'to', 'act', 'in', 'accordance', 'with', 'this', 'appeal.', 'If', 'we', 'in', 'Middle', 'Europe', 'begin', 'today', 'to', 'follow', 'a', 'path', 'responding', 'to', 'the', 'demands', 'of', 'the', 'time', 'for', 'co-existence', 'and', 'co-operation', 'in', 'our', 'states', 'and', 'societies,', 'this', 'would', 'have', 'a', 'strong', 'influence', 'on', 'every', 'other', 'place', 'in', 'the', 'world.'] ;
var index =-1;
var on = false;

function preload(){
  Metana = loadFont ('data/NeueMetana-Regular.otf');
}

function setup() {
  createCanvas (windowWidth,windowHeight);
  textAlign(CENTER);
  textSize(100);
  textFont(Metana);
  frameRate (7);
}

function draw() {
  index ++;
    if (on){
      background (255);
      fill(0);
  } else {
      background (0);
      fill(255);
  }
  
  text(intro[index],width/2,400);

  if (index > 117){
    index = -1;
  }
  
}
function mousePressed (){
  on = !on;
}
