// Number
1;
0.45;
1.23e3;
-99;
NaN;
Infinity;

0/0; //NaN
10/0; //Infinity

// JavaScript允许对任意数据类型做比较：
// 第一种是==比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果；
// 第二种是===比较，它不会自动转换数据类型，如果数据类型不一致，返回false，如果一致，再比较
console.log(false == 0); // true
console.log(false === 0); //false

// 另一个例外是NaN这个特殊的Number与所有其他值都不相等，包括它自己：
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false


// 浮点计算，计算机无法精确表示无限循环小数
1 / 3 === (1 - 2 / 3); // false
Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001; // true

// null。 undefined仅仅在判断函数参数是否传递的情况下有用

// 数组,
new Array(1, 2, 3);
arr = [1, 2, 3.14, 'Hello', null, true]; // better
arr[0];

// 对象
var person = {
    name: 'Bob',
    age: 20,
    city: 'Beijing',
};
console.log(person.city);

// 'use strict';
var i = 10;
i = 10; // 全局变量
