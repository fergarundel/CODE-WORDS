class Vehicle {
  constructor(x,y){
    this.pos = createVector(random(width),random(height));
    this.target = createVector(x,y);
    this.vel = createVector();
    this.acc = createVector();
    this.maxspeed = 8;
    this.maxforce = 0.3;
  }
 
  behaviours(){
    let arrive = this.arrive(this.target);  
    this.applyForce(arrive);    
  }
  
  
  applyForce(f){
    this.acc.add(f);    
  }
  
  arrive (target){
    let desired = p5.Vector.sub(target,this.pos);
    let d = desired.mag();
    let speed = this.maxspeed;
    if (d<100){
      speed = map(d,0,100,0,this.maxspeed);
    }
    desired.setMag(speed);
    let steer = p5.Vector.sub(desired,this.vel);
    steer.limit(this.maxforce);
    return steer;

  }
  
  update (){
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
}

  show () {
    stroke (255);
    strokeWeight(3);
    point(this.pos.x+random(-1,1),this.pos.y+random(-1,1));
}
}
