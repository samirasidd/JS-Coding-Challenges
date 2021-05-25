'use strict';

const Car1 = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car1.prototype.accelerate = function (){
    console.log(`${this.speed += 10}km/h`);
}

Car1.prototype.brake = function(){
     console.log(`${(this.speed) -= 5}km/h`);
}


const EV = function(make, speed, charge){
    Car1.call(this, make, speed);
    this.charge = charge;
}

EV.prototype = Object.create(Car1.prototype);

EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;
}

EV.prototype.accelerate = function(){
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%.`);
}

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);

// tesla.accelerate();
// tesla.brake();
tesla.chargeBattery(90);
// console.log(tesla);

tesla.brake();
tesla.accelerate();
tesla.brake();
tesla.accelerate();
