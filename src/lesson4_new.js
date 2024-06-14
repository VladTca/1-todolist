//статическое св-во

// let obj = {
//   name: 'Bob', //статическое св-во
//   age: 55, //статическое св-во
// };

// console.log('obj: ', obj); //obj:  { name: 'Bob', age: 55 }

//////

// function createObj(key, value) {
//   let newObj = {};

//   newObj[key] = value;

//   return newObj;
// }

// console.log(createObj('car', 'BMW'));//{ car: 'BMW' }

// function createObj2(key, value) {
//   return {
//     [key]: value,
//   };
// }

// console.log(createObj2('car new', 'Audi')); //
// {
//     []: '222'
// }//

//вычисляемое(динамическое):

// {
//     [высиляемое св-во]: значение
// }

//1

// let propertyName = 'status';

// const obj1 = {
//   name: 'John', //статическе св-во
//   [propertyName]: 'checked', //динамическое(вычисляемое) св-во
// };

// console.log('obj1: ', obj1); //obj1:  { 'name': 'John', 'status': 'checked' }

//2

// let prefix = 'status_';

// const obj2 = {
//   age: 25, //статическое св-во
//   [prefix + 'id']: 'new member', //динамическое(вычисляемое) св-во
// };

// console.log('obj2: ', obj2); //obj2:  { 'age': 25, 'status_id': 'new member' }

//3

// let index = 2;
// let testProperty = 'test';

// let obj = {
//   [index + 2]: 4,
//   [testProperty.toUpperCase()]: 'test key in upper case',
// };

// console.log('obj: ', obj); //obj:  { '4': 4, TEST: 'test key in upper case' }

// Practical task:

// const STATUS_BUSY = 'busy';
// const STATUS_READY = 'ready';

// const STATUS_LABELS = {
//   [STATUS_BUSY]: 'ожидает',
//   [STATUS_READY]: 'готово',
// };

// const drivers = [
//   { name: 'Pavel', status: 'busy' },
//   { name: 'Anna', status: 'ready' },
//   { name: 'Kiryll', status: 'busy' },
// ];

// const driversStatuses = drivers.map((driver) => {
//   const { status } = driver; // const status = driver.status

//   console.log('status: ', status); // busy, ready, busy

//   return STATUS_LABELS[status];
// });

// console.log('driversStatuses: ', driversStatuses); //driversStatuses:  [ 'ожидает', 'готово', 'ожидает' ]

//Object.keys() - возаращает массив ключей

// const driver = { name: 'Павел', status: 'busy' };

// const result = Object.keys(driver);

// console.log(result); //[ 'name', 'status' ]

//!!!!!

// const driver = { name: 'Павел', status: 'busy', country: { id: 1 } };

// const result1 = Object.keys(driver);

// console.log(result1);//[ 'name', 'status', 'country' ]

//Object.values() - возвращает массив значений

// const driver = { name: 'Павел', status: 'busy' };

// const result = Object.values(driver);

// console.log('result: ', result);//result:  [ 'Павел', 'busy' ]

//!!

// const driver = { name: 'Павел', status: 'busy', country: { id: 1 } };

// const result = Object.values(driver);

// console.log('result: ', result);//result:  [ 'Павел', 'busy', { id: 1 } ]

//Object.entries() - возвращаем массив пар [ключ, значение]

// const driver = { name: 'Павел', status: 'busy' };

// const result = Object.entries(driver);

// console.log(result);//[ [ 'name', 'Павел' ], [ 'status', 'busy' ] ]

//!!

// const driver = { name: 'Павел', status: 'busy', country: { id: 1 } };

// const result = Object.entries(driver);

// console.log(result);//[ [ 'name', 'Павел' ], [ 'status', 'busy' ], [ 'country', { id: 1 } ] ]

// new Map, new Set

//new Map () - это коллекция ключ\значение. Елючи могут быть любого типа

// let newMap = new Map([
//   ['key', 'value'],
//   [1, 'one'],
// ]);

// console.log('newMap', newMap);//newMap Map(2) { 'key' => 'value', 1 => 'one' }

// let map = new Map();

// console.log(typeof map);//object

// const func = () => {};
// console.log('map: ', map);//map:  Map(0) {}

// map.set('1', 'frist value number');
// map.set(1, 'number');
// map.set(true, 'boolean value');
// map.set([], 'array');
// map.set({}, 'object');
// map.set(func, 'function'); //Map(1) { [Function: func] => 'function' }
// const get = map.get(func);

// console.log(get);

// console.log(map);

// console.log(map); //Map(5) {
// //     '1' => 'frist value number',
// //     1 => 'number',
// //     true => 'boolean value',
// //     [] => 'array',
// //     {} => 'object'
// //   }

///////////////////

// let map = new Map();

// map.set('1', 'frist value number');
// map.set(true, 'number');

// // console.log(map.get('1')); //frist value number
// // console.log(map.get(true)); //number

// map.clear();

// // console.log(map); //Map(0) {}

// map.set('1', 'one');
// map.set('2', 'two');

// map.delete('2');

// console.log(map); //Map(1) { '1' => 'one' }
// console.log(map.size);//1

/////

//new Set() - особый вид коллекция (множества без ключей). Все значения уникальыне

// let set = new Set();

// console.log(set);//Set(0) {}

// set.add('value1');
// set.add('value2');
// set.add('value1');

// console.log('set: ', set);//set:  Set(2) { 'value1', 'value2' }

// set.delete('value1');

// console.log('set after deleting:  ', set);//set after deleting:   Set(1) { 'value2' }

// console.log('is it here?', set.has('value1')); //is it here? false
// console.log('is it here? ', set.has('value2')); //is it here?  true

// set.clear();

// console.log(set);//Set(0) {}

////////

// let set = new Set(['value1', 'value2', 3, 4]);

// console.log(set);//Set(4) { 'value1', 'value2', 3, 4 }

//

// let numbers = [1, 1, 1, 3, 4, 5, 6, 76, 7, 8, 9, 0, 6];

// let uniqueNumbers = new Set(numbers);

// // console.log(uniqueNumbers);//Set(10) { 1, 3, 4, 5, 6, 76, 7, 8, 9, 0 }

// let newArr = [...uniqueNumbers];

// console.log(newArr); //[
// //     1, 3, 4, 5, 6,
// //    76, 7, 8, 9, 0
// //  ]

//or

// let result = [...new Set(numbers)];
// console.log(result); //[
//     1, 3, 4, 5, 6,
//    76, 7, 8, 9, 0
//  ]

// console.log(numbers);

///////
