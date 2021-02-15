// Coding Challenge 3 - Section 3

let mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

let john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}


if (mark.calcBMI() > john.calcBMI()) {
    console.log(`Mark's BMI (${mark.calcBMI()}) is higher than John's BMI (${john.calcBMI()}).`);
}
else {
    console.log(`John's BMI (${john.calcBMI()}) is higher than Mark's BMI (${mark.calcBMI()}).`);
}
