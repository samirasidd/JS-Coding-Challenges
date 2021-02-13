// Coding Challenge 1 - Section 3

function calcTip(bill) {
    if (bill <= 300 && bill >= 50) {
        return bill * 0.15;
    }
    else {
        return bill * 0.20;
    }
}

console.log(calcTip(100));
console.log(calcTip(125));
console.log(calcTip(555));
console.log(calcTip(44));


const bills = [125, 555, 44];
const tips = [18.75, 111, 8.8];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
