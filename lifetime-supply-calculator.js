const calculateSupply = function(age, amountPerDay) {
    totalAmount = (70 - age) * 365 * amountPerDay;
    console.log('You will need ' + totalAmount + ' to last you until the ripe old age of 70.');
}

calculateSupply(30, 5);
calculateSupply(50, 20);
calculateSupply(18, 1000);