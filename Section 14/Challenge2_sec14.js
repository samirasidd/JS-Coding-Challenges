
class CarCl {
    constructor(make, speed) 
{
    this.make = make;
    this.speed = speed;
}

accelerate(){
console.log(`${this.speed += 10}km/h`);
}

brake(){
    console.log(`${(this.speed) +- 5}km/h`);
}

get speedUS() {
    return `${this.speed / 1.6}mi/h`;
}
set speedUS(speed) {
   this.speed = speed * 1.6;
 }
}


const ford = new CarCl('Ford', 120);

ford.accelerate();
ford.brake();
console.log(ford);
console.log(ford.speedUS);



