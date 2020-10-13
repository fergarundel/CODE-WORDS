let on = false;
let col = false;

let font;
let vehicles = [];

let text0 = 'FREE, INTERNATIONAL, UNIVERSITY';
let text1 = 'MILITARY THREAT, ECOLOGICAL CRISIS, ECONOMIC CRISIS, CONSCIOUSNESS CRISIS';
let text2 = 'THE PROCESS, OF RECASTING ,HARDENED CONCEPTS, IS UNDER WAY, IT HAS LED TO A, BIG DIALOGUE.';
let text3 = 'THE UNIVERSITY ,INCLUDES ALL THE, GROUPS AND LIVE CELLS, IN OUR SOCIETY ,IN WHICH PEOPLE HAVE, BANDED TOGETHER, TO THINK THROUGH ,THE QUESTIONS ,OF THE FUTURE OF OUR ,SOCIETY TOGETHER.';
let sentences = [text0, text1, text2, text3];


let sentenceIndex = 0;
let words = sentences[sentenceIndex].split(',');
let index = 0;
let timer = 0;


function preload(){
  font = loadFont('data/Helvetica.ttf');
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

  
  for (var i =0; i < vehicles.length ;i++){
    var vehicle = vehicles [i];
    vehicle.behaviours();
    vehicle.update();
    vehicle.show(2);
    }  
  }

  
 function mousePressed(){
   if (on==false){
   setTimeout (loopingText,0);
   }
   on = true;
   if (on == true){
     for (let i = 0; i < vehicles.length; i++){
     vehicles[i].target.x = random(width);
     vehicles[i].target.y = random(height);
      }
      
      words = sentences[sentenceIndex].split(',');
      index = 0;
      timer++;

      if (timer == sentences.length){
        sentenceIndex = -1;
      }
      
      sentenceIndex ++;
   }
 }

function loopingText (){
  
  if (index < words.length){
  setTimeout (loopingText,3000);
  }
   
  let bounds = font.textBounds(words[index], 0, 0, width/15);
  let posx = width / 2 - bounds.w / 2;
  let posy = height / 2 + bounds.h / 2;

  let cells = font.textToPoints(words[index],posx,posy,width/15,{ 
     sampleFactor: 0.3
  });
  
    //if (timer > words.length - 1){
    //for (let i = 0; i < vehicles.length; i++){
    // vehicles[i].target.x = random(width);
    // vehicles[i].target.y = random(height);
    //  }
    //}
    
    if (index < words.length){
   if (cells.length < vehicles.length){
   vehicles.splice(cells.length -1, vehicles.length - cells.length);
  
  for (let i = 0;i < cells.length; i++){
    vehicles[i].target.x = cells[i].x;
    vehicles[i].target.y = cells[i].y; 
    }
  }
  
  else if (cells.length > vehicles.length){
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
    }
 index ++; 
 if (index > words.length - 1){
   index = 0;
 }

}
