function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}
const factorial10 = factorial(10);
console.log(factorial10);
const factorial5 = factorial(5);
console.log(factorial5);
