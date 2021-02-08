// Coding Challenge 1

calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

console.log(calcAverage(1, 2, 3));

console.log(calcAverage(44, 23, 71), calcAverage(65, 54, 49));
console.log(calcAverage(85, 54, 41), calcAverage(23, 34, 27));

const avgDolphins1 = calcAverage(44, 23, 71);
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas1 = calcAverage(65, 54, 49);
const avgKoalas2 = calcAverage(23, 34, 27);


function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win - ${avgDolphins} vs ${avgKoalas}`);
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win - ${avgDolphins} vs ${avgKoalas}`);
    }
    else {
        console.log("No team wins.")
    }
}

checkWinner(46, 56);
checkWinner(60, 28);


