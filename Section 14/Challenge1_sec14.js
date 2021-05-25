
const Car  = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function (){
    console.log(`${this.speed += 10}km/h`);
}

Car.prototype.brake = function(){
     console.log(`${(this.speed) -= 5}km/h`);
}

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelerate();
car1.brake();
car2.accelerate();
car2.brake();



