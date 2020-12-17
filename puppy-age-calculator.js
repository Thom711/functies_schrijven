const calculateDogAge = function(age, rate = 7) {
    const dogAge = age * rate;
    console.log('Your doggie is ' + dogAge + ' years old in dog years!');
}

calculateDogAge(4, 4);
calculateDogAge(12, 7);
calculateDogAge(1024, 2);