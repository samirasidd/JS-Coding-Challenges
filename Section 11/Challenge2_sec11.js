

const calcAverageHumanAge = function(ages){
   const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4))
   console.log(humanAges);
   const adultDogs = humanAges.filter(function(age){
       return age >= 18;
   })
   console.log(adultDogs);
   const calcAverage = adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;
   console.log(calcAverage);
    }


calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
