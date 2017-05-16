'use strict';
var arr = [1, 2, 3.14, 'Hello', null, true];
console.log(arr.length);
arr.length = 4;
console.log(arr);
arr[2] = 'yao';
console.log(arr);
// 索引超过了范围
arr[10] = 'test';
console.log(arr); // undefined

console.log(arr.indexOf('Hello'));
console.log(arr.indexOf('HelloY'));  // -1

console.log(arr.slice());
console.log(arr.slice(0, 3));
console.log(arr.slice(0, -1));
console.log(arr.slice(5));

var length = arr.push('A', 'B');
console.log(arr.length);
console.log(length); //append
console.log(arr.pop());


var arr = [1, 2];
var length = arr.unshift('a', 'b');
console.log(length);
console.log(arr.shift());
console.log(arr.shift());

console.log('-------------------');
arr = ['b', 'd', 'a', 'f'];
console.log(arr.sort()); // 有返回值
console.log(arr);
console.log(arr.reverse()); // 有返回值
console.log(arr);

console.log('-------------------');
var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
// 从索引2开始删除3个元素,然后再添加两个元素:
arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
console.log(arr); // [ 'Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle' ]
// 只删除,不添加:
arr.splice(2, 2); // ['Google', 'Facebook']
// 只添加,不删除:
console.log(arr.splice(2, 0, 'Google', 'Facebook')); // 返回[],因为没有删除任何元素

console.log('-------------------');
var arr = ['A', 'B', 'C'];
var added = arr.concat([1, 2, 3]);
console.log(arr);
console.log(added);

var arr = ['A', 'B', 'C', 1, 2, 3];
console.log(arr.join('-'));

var arr = [[1, 2, 3], [400, 500, 600], '-'];
console.log(arr[1][1]);
