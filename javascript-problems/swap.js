var a = 5;
var b = 7;
console.log('before swap: a =', a, 'b =', b);
var temp = a;
a=b;
b=temp;
console.log('after swap: a =', a, 'b =', b);

var x = 5;
var y = 7;
console.log('before swap: x =', x, 'y =', y);
x = x + y;//12
y = x - y;//5
x = x - y;//7
console.log('after swap: x =', x, 'y =', y);
