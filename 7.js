// map set
// js的对象的键必须是字符串
var names = ['Michael', 'Bob', 'Tracy'];
var scores = [99, 33, 66];
console.log(typeof Map); // function
var _m = [];
for (i = 0; i < 3; i++) {
    _m.push([names[i], scores[i]]);
}
console.log(_m);
//Constructor Map requires 'new'
var m = new Map(_m); // Map { 'Michael' => 99, 'Bob' => 33, 'Tracy' => 66 }
console.log(m);

console.log('--------------------------');
console.log(m.get('Michael'));
m.set('Adam', 67); // 添加
m.set('Adam', 99); // 更改
m.has('Adam');
m.get('Adam');
m.delete('Adam'); //
m.get('Adam'); // undefined

// set
console.log('--------------------------');
var s1 = new Set();  // Constructor Set requires 'new'
var s2 = new Set([1, 2, 3, 3]);
console.log(s2); // Set { 1, 2, 3 }
s2.add(4);
s2.delete(3);
console.log(s2);
// Map和Set是ES6标准新增的数据类型，请根据浏览器的支持情况决定是否要使用。
