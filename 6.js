var x = 0;
var i;
for (i = 1; i <= 100; i++) {
    x = x + i;
}
console.log(x);

console.log('--------------------------');
var arr = ['Apple', 'Google', 'Microsoft'];
var i, x;
for (i = 0; i <= arr.length; i++) {
    x = arr[i];
    console.log(x);
}

console.log('--------------------------');
// 死循环
var x = 1; // x = '1'结果一样???
for (;;) {
    if (x > 100) {
        console.log(x);  // 101
        break;
    }
    x ++;
}

// for in
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    console.log(o[key]);
}

console.log('--------------------------');
var a = ['A', 'B', 'C'];
for (var i in a) {
    console.log(i);
    console.log(a[i]);
}

// while 循环
var x = 0;
var n = 99;
while (n > 0) {
    x += n;
    n -= 2;
}
console.log(x);

// do while
console.log('--------------------------');
var n = 0;
do {
    if (n === 0) {
        console.log(n);
    }
    n = n + 1;
} while (n < 100);
console.log(n);
