const dolphinsR1 = 96;
const dolphinsR2 = 108;
const dolphinsR3 = 89;

const dolphingAvg = (dolphinsR1 + dolphinsR2 + dolphinsR3) / 3;
console.log(dolphingAvg);

const koalasR1 = 88;
const koalasR2 = 91;
const koalasR3 = 110;

const koalasAvg = (koalasR1 + koalasR2 + koalasR3) / 3;
console.log(koalasAvg);


if (dolphingAvg > koalasAvg) {
    console.log("Dolphins win the game!");
}
else if (dolphingAvg < koalasAvg) {
    console.log("Koalas win the game!");
}
else {
    console.log("It's a draw!");
}


