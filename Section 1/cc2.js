// Coding Challenge 2

let markheight = 1.69;
let markweight = 78;

let johnheight = 1.95;
let johnweight = 92;


let markBMI = markweight / (markheight * markheight);
let markBMIf = markBMI.toFixed(1)
console.log(markBMIf);

let johnBMI = johnweight / johnheight ** 2;
let johnBMIf = johnBMI.toFixed(1)
console.log(johnBMIf);

let markhigherBMI = markBMI > johnBMI;
console.log(markhigherBMI);

console.log("Mark's BMI is higher than John's!")

console.log(`Mark's BMI ${markBMIf} is higher than John's BMI ${johnBMIf}!`);