var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    'middle-school': 'No.1 School',  // 有效的变量名不能含 -
    score: null  // 最后一个键值对不需要在末尾加,，如果加了，有的浏览器（如低版本的IE）将报错。
};
console.log(xiaoming['middle-school']);
console.log(xiaoming.name);
console.log(xiaoming['name']);

xiaoming.age = 11;
console.log(xiaoming);
delete xiaoming.age;
delete xiaoming['age']; // 不会报错
delete xiaoming.sssssssssss; // 不会报错

console.log('name' in xiaoming);
console.log('toString' in xiaoming); // true, 这个属性不一定是xiaoming的，它可能是xiaoming继承得到的：toString定义在object对象中
console.log(xiaoming.toString());

console.log(xiaoming.hasOwnProperty('name'));
console.log(xiaoming.hasOwnProperty('toString')); // false
