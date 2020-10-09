// CODE TAKEN AND EDITED FROM DANIEL SHIFFMAN (CODING TRAIN)
// CODE ALSO USING ASPECTS FROM https://www.openprocessing.org/sketch/947078 

let on = false;
let col = false;

let font;
let vehicles = [];

let text = 'FREE INTERNATIONAL UNIVERSITY';
let words = text.split(' ');
let index = 0;

function preload(){
  font = loadFont('data/NeueMetana-Regular.otf');
}

function setup() {
  createCanvas (windowWidth,windowHeight);  
  
  for (var i = 0;i < 200;i++){
    var vehicle = new Vehicle(random(width),random(height));
    vehicles.push(vehicle);    
  } 
}

function draw() {
  background (255,0,0);
  
  if (on){
    loopingText();
  }

  for (var i =0; i < vehicles.length ;i++){
    var vehicle = vehicles [i];
    vehicle.behaviours();
    vehicle.update();
    vehicle.show(3);
    }  
  }
  
 function mousePressed(){
  on = true;
   }
 

function loopingText (){
  let bounds = font.textBounds(words[index], 0, 0, width/10);
  let posx = width / 2 - bounds.w / 2;
  let posy = height / 2 + bounds.h / 2;

  let cells = font.textToPoints(words[index],posx,posy,width/10,{ 
     sampleFactor: 0.1
  });
  
    if (index > words.length - 1){
    for (let i = 0; i < vehicle.length; i++){
     vehicles[i].target.x = random(width);
     vehicles[i].target.y = random(height);
      }
    }

  if (cells.length < vehicles.length){
    vehicles.splice(cells.length -1, vehicles.length - cells.length);
  
  for (let i = 0;i < cells.length; i++){
    vehicles[i].target.x = cells[i].x;
    vehicles[i].target.y = cells[i].y; 
    }
  } else if (cells.length > vehicles.length){
    
    for (let i = vehicles.length; i< cells.length;i++){
      let v = vehicles[i - vehicles.length].clone();
      vehicles.push(v);
    }
    
    for (let i=0; i<cells.length;i++){
      vehicles[i].target.x = cells[i].x;
      vehicles[i].target.y = cells[i].y;
    } 
  } else {
    for (let i = 0; i < cells.length; i++){
      vehicles[i].target.x = cells[i].x;
      vehicles[i].target.y = cells[i].y;
    }
  }
  
    for (let i = 0; i < frameCount; i++){
      if (frameCount == 200 * i + 200){
      index++;
    } 
   }
  }
