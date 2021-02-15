// Coding Challenge 4 - Section 3

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips1 = [];
let totals1 = [];

let i;

for (i = 0; i < 10; i++) {
    tips1.push(calcTip(bills1[i]));
    totals1.push(bills1[i] + tips1[i]);
}

console.log(tips1, totals1);
