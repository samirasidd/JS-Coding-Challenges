

let bill;
bill = 275;

let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(tip);
console.log(`The bill was ${bill}, the tip was ${tip} and the total value was ${bill + tip}.`);

bill = 40;
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(tip);
console.log(`The bill was ${bill}, the tip was ${tip} and the total value was ${bill + tip}.`);

bill = 430;
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(tip);
console.log(`The bill was ${bill}, the tip was ${tip} and the total value was ${bill + tip}.`);



