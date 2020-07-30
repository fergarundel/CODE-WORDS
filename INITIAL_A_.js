// created by Fergus Arundel

function setup() {
createCanvas (500,500);
background (255,255,255);
}

function draw() {
background (255,255,255);
strokeWeight(mouseX/5);
stroke (0,0,255);
line (115,400,215,100);
line (215,100,285,100);
line (285,100,385,400);
line (385,400,330,400);
line (330,400,310,330);
line (310,330,190,330);
line (190,330,170,400);
line (170,400,115,400);

line (210,275,250,155);
line (250,155,290,275);
line (290,275,210,275);

}
