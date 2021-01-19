function fibonacci(n) {
    var fibo = [0, 1];

    for (var i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

var fibo10 = fibonacci(10);
console.log(fibo10);
var fibo5 = fibonacci(5);
console.log(fibo5);