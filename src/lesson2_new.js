//push(), pop(), shift(), unshift() - мутирющими

//push()

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const result = names.push('New Name 1', 'New Name 2');

// console.log('names: ', names); //names:  [ 'Alex', 'Bob', 'Ivan', 'Sasha', 'New Name 1', 'New Name 2' ]
// console.log('result: ', result); //result:  6

//pop()

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const poppedResult = names.pop();

// console.log('names: ', names); //names:  [ 'Alex', 'Bob', 'Ivan' ]
// console.log('poppedResult: ', poppedResult); //poppedResult:  Sasha

// const names = [];
// const result = names.pop();

// console.log('names: ', names); //names:  []
// console.log('result: ', result); //result:  undefined

//shift()

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const shiftedResult = names.shift();

// console.log('names: ', names); //names:  [ 'Bob', 'Ivan', 'Sasha' ]
// console.log('shigtedResult: ', shiftedResult); //shigtedResult:  Alex

// const arr = [];
// const result = arr.shift();

// console.log('result: ', result); //result:  undefined

//unshift()

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const unshiftedResult = names.unshift('new name1', 'new name2');

// console.log('names: ', names); //names:  [ 'new name1', 'new name2', 'Alex', 'Bob', 'Ivan', 'Sasha' ]
// console.log('unshiftedResult: ', unshiftedResult); //unshiftedResult:  6

//reverse() - мутирующим

// const arr = [1, 2, 3, 4, 5];
// arr.reverse();

// console.log('reverse array: ', arr); //reverse array:  [ 5, 4, 3, 2, 1 ]

//split() - метод для работы со строками

//1
// const str = 'ab-cd-ef';
// const result = str.split('-');

// console.log('str: ', str); //str:  ab-cd-ef
// console.log('result: ', result); //result:  [ 'ab', 'cd', 'ef' ]

//2
// const str = 'ab-cd-ef';
// const result = str.split('-', 2);

// console.log('result: ', result); //result:  [ 'ab', 'cd' ]

//3
// const str = 'ab-cd-ef';
// const res = str.split('');

// console.log('res: ', res); //res:  [
// //     'a', 'b', '-',
// //     'c', 'd', '-',
// //     'e', 'f'
// //   ]

//4
// const str = 'ab-cd-ef';
// const res = str.split();

// console.log('res: ', res);//res:  [ 'ab-cd-ef' ]

//join() метод массива

//1
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const joinResult = names.join('-');

// console.log('joinResult: ', joinResult);//joinResult:  Alex-Bob-Ivan-Sasha

//2

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const joinResult = names.join();

// console.log('joinResult: ', joinResult);//joinResult:  Alex,Bob,Ivan,Sasha

//3
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const joinResult = names.join('');

// console.log('joinedResult: ', joinResult);//joinedResult:  AlexBobIvanSasha

//4

// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const result = names.join(' ,');

// console.log('result: ', result); //result:  Alex ,Bob ,Ivan ,Sasha

//popular task
// const telephoneNumber = '123456789';
// const spliteValue = telephoneNumber.split('');
// console.log(spliteValue); //[
//     '1', '2', '3',
//     '4', '5', '6',
//     '7', '8', '9'
//   ]
// const result = spliteValue.reverse().join('');
// console.log('final result: ', result); //final result:  987654321

//short result: const res = telephoneNumber.split('').reverse().join('')

//concat() - не мутирует не исходный массив

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const arr3 = [5, 6];

// const result = arr1.concat(arr2, arr3);

// console.log('result: ', result); //result:  [ 1, 2, 3, 4, 5, 6 ]
// console.log('arr1: ', arr1);//arr1:  [ 1, 2 ]

//2

// const arr1 = [1, 2];
// const arr2 = [3, 4];

// const nestedArr = [
//   [5, 6],
//   [7, 8, [9, 10]],
// ];

// const result = arr1.concat(arr2, nestedArr);
//console.log('result: ', result); //result:  [ 1, 2, 3, 4, [ 5, 6 ], [ 7, 8, [9, 10] ] ]

//flat()

// const flatRes = nestedArr.flat();
// console.log('flatRes', flatRes);//flatRes [ 5, 6, 7, 8, [ 9, 10 ] ]

// const res = nestedArr.flat(Infinity);
// console.log('res: ', res); //res:  [ 5, 6, 7, 8, 9, 10 ]

//forEach()

//arr.forEach(function (el, index, arr) => {})

// const arr = [1, 2, 3, 4, 5];
// let sum = 0;

// arr.forEach(function (el) {
//   sum += el; // sum = sum + el
// });

// console.log('sum: ', sum); //15

//indexOf()

//1
// const arr = [1, 2, 3, 4, 5];
// const res = arr.indexOf(3);

// console.log('res: ', res);//res:  2

//2

// const arr = [1, 2, 3, 4, 5];
// const res = arr.indexOf(6);

// console.log('res: ', res); //-1

//lastIndexOf()

// const arr = [1, 2, 4, 3, 4, 5];
// const res = arr.lastIndexOf(4);

// console.log(res);//4

//find()

//1
// const strArr = ['str', 'strststs', 'fgfgf', 'dff', 'fgdgfdgd'];
// const res = strArr.find((el) => {
//   return el.length == 3;
// });

// console.log('res: ', res); //res:  str

//2
// const arr = [1, 2, 3, 4, 5];
// const res = arr.find((num) => {
//   return num % 2 == 0;
// });

// console.log('res: ', res); //2

//3
// const arr = [1, 2, 3, 4, 5];
// const res = arr.find((num) => {
//   return num == 17;
// });

// console.log('res: ', res); //res:  undefined

//includes()

// const num = [1, 2, 3, 4, 5];
// const result = num.includes(5);

// console.log('result: ', result);//true

//2
// const num = [1, 2, 3, 4, 5];
// const result = num.includes(7);

// console.log('result: ', result); //false

//filter() => return new []

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter((str) => str.length > 5);

// console.log('result: ', result); //result: ['exuberant', 'destruction', 'present']

//sort()

//1) может сортировать без доп параметров по табличке unicode

// const names = ['Alex', '!alex', 'alex', 'Виктор', 'Dymych', 'Valera', 'Igor', 'Ignat'];

// console.log(names.sort()); //[
// //     '!alex',  'Alex',
// //     'Dymych', 'Ignat',
// //     'Igor',   'Valera',
// //     'alex',   'Виктор'
// //   ]

// const numbers = [1, 2, -3525523, 366643, -3, 15215];
// console.log(numbers.sort());//[ -3, -3525523, 1, 15215, 2, 366643 ]

//2) мутирует исходный массив т.е. мутабельный метод массива

// const names = ['Alex', 'alex'];
// console.log(names.sort() === names);//true

// const a = []
// a.sort()

//compare function for sort:

//по возрастанию
// const numbers = [1, 2, -3525523, 366643, -3, 15215];
// const result = numbers.sort((a, b) => a - b);// a - b < 0, a ставят на наименьший индекс(т.е. первее)

// console.log(result); //[ -3525523, -3, 1, 2, 15215, 366643 ]

//по возрастанию
// const numbers = [1, 2, -3525523, 366643, -3, 15215];
// const result = numbers.sort((a, b) => a - b); // a - b < 0, a ставят на наименьший индекс(т.е. первее)

// console.log(result); //[ -3525523, -3, 1, 2, 15215, 366643 ]

// const compareFn = (a, b) => {
//   //1, 2
//   if (a > b) {
//     return 150; //мы меняем местами
//   } else {
//     return -140;
//   }
// };

// const res = numbers.sort(compareFn);
// console.log('res: ', res); //res:  [ -3525523, -3, 1, 2, 15215, 366643 ]

//по убыванию
// const numbers = [1, 2, -3525523, 366643, -3, 15215];
// const result = numbers.sort((a, b) => b - a); // a - b > 0, b ставят на наименьший индекс(т.е. первее)

// console.log(result); //[ 366643, 15215, 2, 1, -3, -3525523 ]

//strings

const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
    },
    {
        id: 3,
        name: 'alex',
        isStudent: true,
    },
    {
        id: 4,
        name: 'Виктор',
        isStudent: true,
    },
    {
        id: 5,
        name: 'виктор',
        isStudent: true,
    },
];

// console.log(users.sort((a, b) => a.name.localeCompare(b.name)));
// [
//     { id: 5, name: 'виктор', isStudent: true },
//     { id: 4, name: 'Виктор', isStudent: true },
//     { id: 3, name: 'alex', isStudent: true },
//     { id: 2, name: 'Alex', isStudent: true },
//     { id: 1, name: 'Bob', isStudent: true }
//   ]

// console.log(users.sort((a, b) => b.name.localeCompare(a.name)));
// [
//     { id: 1, name: 'Bob', isStudent: true },
//     { id: 2, name: 'Alex', isStudent: true },
//     { id: 3, name: 'alex', isStudent: true },
//     { id: 4, name: 'Виктор', isStudent: true },
//     { id: 5, name: 'виктор', isStudent: true }
//   ]

//toSorted() - иммутаьельно работает точно так же как и sort

// const months = ['Mar', 'Jan', 'Feb', 'Dec'];
// const sortedArray = months.toSorted();

// console.log('months', months);
// console.log('sortedArr', sortedArray);

// const values = [1, 10, 21, 2];
// const sortedValues = values.toSorted((a, b) => a - b);
// console.log(sortedValues);
// console.log(values);

const users1 = [
    {
        id: 1,
        name: 'Bob', //["Bob"]
        isStudent: true,
    },
    {
        id: 2,
        name: 'Alex', //["Bob", "Alex"]
        isStudent: true,
    },
    {
        id: 3,
        name: 'Ann', ////["Bob", "Alex", "Ann"]
        isStudent: true,
    },
    {
        id: 4,
        name: 'Donald', //////["Bob", "Alex", "Ann", "Donald"]
        isStudent: false,
    },
];

// -> ["Bob", "Alex", "Ann", "Donald"]

// const res = users1.map((user) => user.name);
// console.log('res: ', res); //res:  [ 'Bob', 'Alex', 'Ann', 'Donald' ]

//

// function newMap(arr, callback) {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i]));
//   }

//   return result;
// }

// const result = newMap(users1, (user) => user.name);
// console.log(result); //[ 'Bob', 'Alex', 'Ann', 'Donald' ]


// -------------------------------------------------------
//
// let fruits = ['apple', 'banana', 'orange'];
// fruits.push('kiwi')
// console.log(fruits); // Output: ['apple', 'banana', 'orange', твои добавленные элементы в конец]
//
// const lastUser=users.pop();
// console.log(lastUser); // { id: 4, name: 'Donald', isStudent: false }
// console.log(users);
//
// const firstUser = users.shift();
// console.log(firstUser);
// console.log(users);
//
// const a = users.unshift(firstUser);
// console.log(a);
// console.log(users);
//
// const str = 'JavaScript is awesome';
//
// const res=str.split(' ').reverse().join(' ')
// console.log(res);
//
//
// const mergeArrays = (a,b)=>{
//   return a.concat(b)
// }
//
//
// console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]
//
// console.log(mergeArrays(['apple', 'banana'], ['orange', 'kiwi'])); // Output: ["apple", "banana", "orange", "kiwi"]
//
//
// const flattenArray =(a)=>{
//   return a.flat(Infinity)
// }
//
//
// console.log(flattenArray([1, [2, 3], [[4], [5, 6]]])); // Output: [1, 2, 3, 4, 5, 6]
// console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Output: [1, 2, 3, 4, 5]

//
// let numbers = [10, 20, 30, 40, 50];
// let fruits = ['apple', 'banana', 'orange','kiwi']
//
// const findFirstElement =(a,fn)=>{
//   return a.find(fn)
// }
//
//
// let firstNumberGreaterThan25 = findFirstElement(numbers, (num) => num > 25);
// console.log(firstNumberGreaterThan25); // Output: 30
//
// let firstFruitStartingWithO = findFirstElement(fruits, (fruit) => fruit.startsWith('o'));
// console.log(firstFruitStartingWithO); // Output: "orange"

// const checkElement =(a,b)=>{
//   return a.includes(b)
// }
//
// let numbers = [1, 2, 3, 4, 5];
// let fruits = ['apple', 'banana', 'orange', 'kiwi'];
//
// console.log(checkElement(numbers, 3)); // Output: true
// console.log(checkElement(fruits, 'grape')); // Output: false

//
// let numbers1 = [10, 20, 30, 40, 50];
// let numbers2 = [5, 15, 25, 35, 45];
//
// const filterGreaterThan = (a, b) => {
//     return a.filter(x => x > b)
// }
//
// console.log(filterGreaterThan(numbers1, 25)); // Output: [30, 40, 50]
// console.log(filterGreaterThan(numbers2, 20)); // Output: [25, 35, 45]
//
//
// let people = [
//     {name: 'John', age: 30},
//     {name: 'Alice', age: 25},
//     {name: 'Bob', age: 35},
// ];
//
// const sortAlphabeticallyByProperty = (o, n) => {
//     return o.sort((a, b) => {
//         if (a[n] < b[n]) {
//             return -1
//         }
//         if (a[n] > b[n]) {
//             return 1
//         }
//         return 0
//     })
// }
//
// console.log(sortAlphabeticallyByProperty(people, 'name')); // [ { name: 'Alice', age: 25 },{ name: 'Bob', age: 35 },{ name: 'John', age: 30 }]

//
// let numbers = [5, 2, 8, 1, 4];
// const sortDescending = (a) => {
//     return a.sort((a,b)=>(b-a))
// }
//
// console.log(sortDescending(numbers)); // Output: [8, 5, 4, 2, 1]
//
//
//
//
// let data = [
//     { value: 1, name: 'Option 1' },
//     { value: 2, name: 'Option 2' },
//     { value: 3, name: 'Option 3' },
// ];
//
//
//
//  let formattedData=data.map(x=>({value:x.value,label:x.name}));
//
//
//
// console.log(formattedData); // [
// //   { value: 1, label: 'Option 1' },
// // { value: 2, label: 'Option 2' },
// // { value: 3, label: 'Option 3' }
// // ]
//
//
// let products = [
//     { id: 1, name: 'Apple', price: 1.99 },
//     { id: 2, name: 'Banana', price: 0.99 },
//     { id: 3, name: 'Orange', price: 2.49 },
// ];
// const productsWithDiscount = products.map(x=>(
//     {...x, discountedPrice: x.price*0.9}))
//
//
//
//     console.log(productsWithDiscount); // [
// //   { id: 1, name: 'Apple', price: 1.99, с: 1.791 },
// //   { id: 2, name: 'Banana', price: 0.99, discountedPrice: 0.891 },
// //   { id: 3, name: 'Orange', price: 2.49, discountedPrice: 2.241 }
// // ]


const isPalindrome=(a)=>{
    let b=a.split('').reverse().join('')
   return b===a
}

// Ожидаемый результат:
console.log(isPalindrome('level')); // Вернет true
console.log(isPalindrome('racecar')); // Вернет true
console.log(isPalindrome('hello')); // Вернет false


let arr = [1, 1, 5, 6, 7, 8, 9, 9, 3, 4, 0, 19];
const removeDublicates = (a)=>{
    let er=[]
    for (let i = 0; i < a.length; i++) {
      if (a.indexOf(a[i])!==a.lastIndexOf(a[i]))
      {if (!er.includes(a[i]))
          er.push(a[i])
      }

    }
    return er
}

console.log(removeDublicates(arr));//[ 1, 9 ]



const persons = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
];

const sortByProperty=(arr,str)=>{
    return arr.sort((a,b)=>{
        if((a[str]-b[str])>0) return 1
        if((a[str]-b[str])<0) return -1
    return 0

    })
}


console.log(sortByProperty(persons, 'name'));
// [{ name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Charlie', age: 35 }]


