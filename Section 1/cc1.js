//Coding Challenge 1
////Test Data 1
let markHeight = 1.69;
let markWeight = 78;

let johnHeight = 1.95;
let johnWeight = 92;


let markBmi = markWeight / (markHeight * markHeight);
console.log(markBmi);

let johnBmi = johnWeight / johnHeight ** 2;
console.log(johnBmi);

let markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI);

//Test Data 2
let markHeight2 = 1.88;
let markWeight2 = 95;

let johnHeight2 = 1.76;
let johnWeight2 = 85;

let johnBmi2 = johnWeight2 / johnHeight2 ** 2;
console.log(johnBmi);
let markBmi2 = markWeight2 / markHeight2 ** 2;
console.log(markBmi2);

let markHigherBMI2 = markBmi2 > johnBmi2;
console.log(markHigherBMI2);

