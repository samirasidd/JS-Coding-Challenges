
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
    ];


dogs.forEach(dog => (dog.recomFood = dog.weight ** 0.75 * 28));
console.log(dogs);

console.log(dogs.find(dog => dog.owners.includes('Sarah')));

const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recomFood).map(dog => dog.owners).flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recomFood).map(dog => dog.owners).flat();
console.log(ownersEatTooLittle);

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too less!`);

const enough = dogs.some(dog => dog.curFood === dog.recomFood);
console.log(enough);

const okay = dogs.some(dog => dog.curFood > dog.recomFood * 0.9 && dog.curFood < dog.recomFood * 1.1);
console.log(okay);

console.log(dogs.filter(dog => dog.curFood > dog.recomFood * 0.9 && dog.curFood < dog.recomFood * 1.1))

const sorted = dogs.slice().sort((a, b) => a.recomFood - b.recomFood);
console.log(sorted);


