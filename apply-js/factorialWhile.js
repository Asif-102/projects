function factorial(num) {
    let fact = 1;
    let i = 1;
    while (i <= num) {
        fact = fact * i;
        i++;
    }
    return fact;
}
const factorial5 = factorial(5);
console.log(factorial5);
const factorial10 = factorial(10);
console.log(factorial10);