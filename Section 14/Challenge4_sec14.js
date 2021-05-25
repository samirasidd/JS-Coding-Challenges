'use strict';

class CarCls {
    constructor(make, speed) 
{
    this.make = make;
    this.speed = speed;
}

accelerate(){
console.log(`${this.speed += 10}km/h`);
}

brake(){
    console.log(`${(this.speed) -= 5}km/h`);
    return this;
}

get speedUS() {
    return this.speed / 1.6;
}
set speedUS(speed) {
   this.speed = speed * 1.6;
 }
}



class EVCl extends CarCls {

    #charge;

    constructor(make, speed, charge){
    super(make, speed);
    this.#charge = charge;
}

chargeBattery(chargeTo){
    this.#charge = chargeTo;
    return this;
}

accelerate(){
    this.speed += 20;
    this.#charge--;
    console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.#charge}%.`);
    return this;
   
}
    
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);

rivian.accelerate().accelerate().accelerate().brake().chargeBattery(12);


