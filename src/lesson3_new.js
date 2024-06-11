//slice - иммутабельным

//arr.slice(откуда отрезать, (докуда отрезать)) - второй параметр не явля обязательным

//1

// let arr = ['a', 'b', 'c', 'd', 'e'];

// let subArr = arr.slice(0, 2); //второй параметр не включительно вырезает элементы

// console.log('arr: ', arr); //arr:  [ 'a', 'b', 'c', 'd', 'e' ]
// console.log('subArr: ', subArr); //subArr:  [ 'a', 'b' ]

//2
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let subArr = arr.slice();

// console.log('subArr: ', subArr); //subArr:  [ 'a', 'b', 'c', 'd', 'e' ]
// console.log(arr === subArr);//false

//3

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let subArr = arr.slice(2);

// console.log('subArr: ', subArr);//subArr:  [ 'c', 'd', 'e' ]

//splice - мутабельным
// массив.splice(откуда удаляем, сколько удаляем, вставить, вставить...);

//1

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let subArr = arr.splice(1, 3);

// console.log('arr: ', arr); //arr:  [ 'a', 'e' ]
// console.log('subArr: ', subArr); //subArr:  [ 'b', 'c', 'd' ]

//2
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let subArr = arr.splice(0, 0, 'test value1', 'test value 2');

// console.log('arr: ', arr);//arr:  [ 'test value1', 'test value 2', 'a', 'b', 'c', 'd', 'e' ]
// console.log('subArr: ', subArr);//subArr:  []

//4

// let arr = [1, 2, 4];
// let test = 'Value';
// let arrayLength = arr.length;

// arr.splice(0, arrayLength, test);

// console.log('arr: ', arr); //arr:  [ 'Value' ]

//5

// let arr = [1, 2, 3];
// let arrayLength = arr.length;

// arr.splice(0, 11, 4);

// console.log('arr: ', arr);

//toSpliced() - передаются точно также как и в сплайсе(работает иммутабельно)

// const months = ['Jan', 'Mar', 'Apr', 'May'];

// const newMonths = months.toSpliced(1, 0, 'Feb');

// console.log('initial months: ', months); //['Jan', 'Mar', 'Apr', 'May']
// console.log('new Months: ', newMonths); //["jan", "Feb", "Mar", "apr", "May"]

//иммутабельго
// let arr1 = [1, 2, 4];
// let slicedArr = arr1.slice(0, 1);
// console.log(arr1); //[ 1, 2, 4 ]

//мутабельно
// let arr = [1, 2, 4];
// let res = arr.push('4'); //

// console.log(res);//4
// console.log(arr); //[ 1, 2, 4, '4' ]

//reduce()

// let a = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < a.length; i++) {
//   sum = sum + a[i];
// }

// console.log(sum);//15

// reduce(function(acc,  item, index) {}, [])
// reduce(function(acc, item, index) {})//стартовое значение acc a[0] так как не указали его через запятую

//1 task
// let a = [1, 2, 3, 4, 5];
// let result = a.reduce(function (acc, current) {
//   //   console.log('acc: ', acc);
//   //   console.log('current: ', current);
//   return acc + current;
// }, 0);

// console.log('result: ', result);//15

//task 2
// const fruits = [
//   { name: 'apple', quantity: 2 },
//   { name: 'banana', quantity: 3 },
//   { name: 'orange', quantity: 1 },
// ];

// const totalQuantity = fruits.reduce(function (acc, fruit) {
//   //   console.log('fruit: ', fruit);
//   //   console.log('acc: ', acc);
//   return acc + fruit.quantity;
// }, 0);

// console.log(totalQuantity);//6

//3
// const numbers = [5, 6, 7, 10, 6, 7];
// const maxNumber = numbers.reduce(function (acc, currentNumber) {
//   //   console.log('currentNumber: ', currentNumber);
//   //   console.log('acc: ', acc);
//   return currentNumber > acc ? currentNumber : acc;
// }, numbers[0]);

// const maxNumber = numbers.reduce(function(acc, currentNumber) {

// }//можем не указывать так как по дефолту возьмет numbers[0]

//4

// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 22 },
// ]; // {names: [...], totalAges: 0}

// const result = people.reduce(
//   function (acc, user) {
//     acc.names.push(user.name);
//     acc.totalAges += user.age; //acc.totalAges = acc.totalAges + user.age
//     return acc;
//   },
//   { names: [], totalAges: 0 }
// );

// console.log('result: ', result);//result:  { names: [ 'Alice', 'Bob', 'Charlie' ], totalAges: 77 }

//5

// const people = [
//   { name: 'Vika', age: 25, budget: 4500 },
//   { name: 'Nikita', age: 45, budget: 35000 },
//   { name: 'Igor', age: 55, budget: 340 },
//   { name: 'Insaf', age: 65, budget: 50000 },
//   { name: 'Alyona', age: 75, budget: 20 },
// ]; // ..(number)

// const totalBudget = people.reduce((acc, person) => {
//   return acc + person.budget;
// }, 0);

// console.log(totalBudget);//89860

//2
// const people = [
//   { name: 'Vika', age: 25, budget: 4500 },
//   { name: 'Nikita', age: 45, budget: 35000 },
//   { name: 'Igor', age: 55, budget: 340 },
//   { name: 'Insaf', age: 65, budget: 50000 },
//   { name: 'Alyona', age: 75, budget: 20 },
// ]; //{totalBudget: [89860, ...], names: [....]}

// const result = people.reduce(
//   (acc, currentValue) => {
//     acc.totalBudget.push(currentValue.budget);
//     acc.names.push(currentValue.name);
//     return acc;
//   },
//   { totalBudget: [], names: [] }
// );

// console.log(result); //{
// //     totalBudget: [ 4500, 35000, 340, 50000, 20 ],
// //     names: [ 'Vika', 'Nikita', 'Igor', 'Insaf', 'Alyona' ]
// //   }

//

// const words = ['Hello', ' ', 'world', '!']; //'Hello world!'

// const result = words.reduce((acc, el) => {
//   return acc + el;
// }, '');

// console.log(result); //Hello world!

//
// const arr = [1, 20, 30, 60, 7, 0]; //min number ; 0

// const minNum = arr.reduce((acc, el) => {
//   return el < acc ? el : acc;
// });

// console.log(minNum); //0



// -------------------------------------------------------------------------------
// let str = 'Hello, world!';
// let startIndex = 7;
//
// const getSubStr = (str, startIndex) => {
//     return str.substring(startIndex);
// };
//
// console.log(getSubStr(str, startIndex)); // Выведет: "world!"
