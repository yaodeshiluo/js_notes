// 字符串
'I\'m \"OK\"!';

// ASCII字符可以以\x##形式的十六进制表示，例如：
console.log('\x41' === 'A'); // true
// 还可以用\u####表示一个Unicode字符：
console.log('\u4e2d\u6587' === '中文'); // 完全等同于 '中文'

`这是一个
多行
字符串`;

// ES6新增了一种模板字符串
var name = '小明';
var age = 20;
var message = `你好, ${name}, 你今年${age}岁了!`; // 不能用'', 或"", 不然为不会替换
console.log(message);


// 操作字符串
var s = 'Hello World!';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.indexOf('world')); // -1
console.log(s.indexOf('World'));
console.log(s.substring(0, 5));
console.log(s.substring(6));
console.log('-----------------');
console.log(s.substring(0, -2)); // ""
// console.log(s[6:8]) 错误！
