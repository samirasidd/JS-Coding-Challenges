


const checkDogs = function(dogsJulia, dogsKate){
    
    let dogsJuliaCopy = dogsJulia.slice();
    dogsJuliaCopy.splice(0, 1);
    dogsJuliaCopy.splice(-2);
    console.log(dogsJuliaCopy);

    const bothArr = dogsJuliaCopy.concat(dogsKate);
    console.log(bothArr);
    bothArr.forEach(function(age, i){
        if (age > 2){
            console.log(`Dog number ${i + 1} is an adult, and is ${age} years old.`);
        }
        else
        {
            console.log(`Dog number ${i + 1} is still a puppy.`);
        }

    });
    
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

