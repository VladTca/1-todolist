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
// const name_property = 'last';
// const role_property = 'user';
//
// const employee = {
//     firstName: 'Ivan',
//     [name_property + 'Name']: 'Ivanov',
//     ['middle' + 'Name']: 'Ivanovich',
//     message: 'Hello world!',
//     permission: {
//         canEdit: true,
//         canDelete: false,
//         [role_property.toUpperCase()]: 'user',
//     },
// };
//
// console.log(employee);// ????
//
// let student = {
//     name: 'John',
//     age: 20,
//     course: 'Math',
// };
// let propertyCount = Object.keys(student).length
//
// console.log(propertyCount);
//
// let scores = {
//     math: 90,
//     english: 85,
//     science: 92,
// };


// let totalScore=Object.values(scores).reduce(
//     (acc,cur)=>{
//         return acc+cur
//     },0
// )
//
// console.log(totalScore);

//
// let obj = { a: 1, b: 2, c: 3 };


// function objectToArray(obj) {
//     return Object.entries(obj)
// }
// console.log(objectToArray(obj)); // [['a', 1], ['b', 2], ['c', 3]]




// let studentGrades = new Map();
// studentGrades.set('Adam', 75);
// studentGrades.set('Bob', 85);
//
//
// console.log(studentGrades.get('Bob')); // 85

//
// let products = new Map([
//     ['Milk', 1.2],
//     ['Bread', 1.5],
//     ['Cheese', 2.5],
// ]);
// if (products.has('Bread')) {
//     products.delete('Bread');
// }
//
// console.log(products.has('Bread')); // false
// console.log(products);


// let fruits = new Set(['apple', 'banana', 'mango']);
// if (fruits.has('apple')) {
//     fruits.delete('apple');
// }
// console.log(fruits);
//
// const numbers = [1, 1, 4, 6, 7, 8, 9, 0, 0, 10, 10, 11]
//
// let result = [...new Set(numbers)];
//
// console.log('result: ', result); //result:  [
// //   1, 4,  6,  7, 8,
// //   9, 0, 10, 11
// // ]

// links to watch theory
// https://www.youtube.com/watch?v=6napu-MGQDo&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=47
// https://www.youtube.com/watch?v=I8LNJpG60vI&feature=youtu.be

// 1. Simple object
let man = {
    name: 'John',
    age: 28
};

let manFullCopy  = {...man}


// 2. Array of primitives
let numbers = [1, 2, 3];

let numbersFullCopy =[...numbers]


// 3. Object inside an object
let man1 = {
    name: 'John',
    age: 28,
    mother: {
        name: 'Kate',
        age: 50
    }
};



let man1FullCopy = {...man1,mother:{...man1.mother}}


// 4. Array of primitives inside an object
let man2 = {
    name: 'John',
    age: 28,
    friends: ["Peter", "Steven", "William"]
};

let man2FullCopy = {...man2,friends:[...man2.friends]}


// 5 Array of objects
let people = [
    {name: "Peter", age: 30},
    {name: "Steven", age: 32},
    {name: "William", age: 28}
];


let peopleFullCopy =[...people]


// 6 Array of objects inside object
let man3 = {
    name: 'John',
    age: 28,
    friends: [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
    ]
};

let man3FullCopy ={...man3,friends:man3.friends.map(el=>({...el}))}
// console.log(man3FullCopy)


// 7 Object inside an object, inside an object
let man4 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        }
    }
};

let man4FullCopy = {...man4,mother:{...man4.mother,work:{...man4.mother.work}}}

// 8 Array of objects inside object -> object
    let man5 = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            },
            parents: [
                {name: "Kevin", age: 80},
                {name: "Jennifer", age: 78},
            ]
        }
    };

    let man5FullCopy = {...man5,mother:{...man5.mother,work:{...man5.mother.work},parents:man5.mother.parents.map(parent=>({...parent}))}}
// console.log(man5FullCopy)
// console.log(JSON.stringify(man5FullCopy, null, 2));

// 9 Object inside an object -> array -> object ->  object
let man6 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht"
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi"
                }
            },
        ]
    }
};

let man6FullCopy = {
    ...man6,
    mother: {
        ...man6.mother,
        work: {
            ...man6.mother.work
        },
        parents: man6.mother.parents.map(parent => ({
            ...parent,
            favoriteDish: {
                ...parent.favoriteDish
            }
        }))
    }
};
// console.log(man6FullCopy)
console.log(JSON.stringify(man6FullCopy, null, 2));
//10 Array of objects inside an object -> object -> array -> object ->  object
let man7 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht",
                    ingredients: [
                        {title: "beet", amount: 3},
                        {title: "potatoes", amount: 5},
                        {title: "carrot", amount: 1},
                    ]
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi",
                    ingredients: [
                        {title: "fish", amount: 1},
                        {title: "rise", amount: 0.5}
                    ]
                }
            },
        ]
    }
};

let man7FullCopy = {...man7,mother:{...man7.mother,work:{...man7.mother.work},parents:man7.mother.parents
            .map(parent=>({...parent,favoriteDish:{...parent.favoriteDish,ingredients:parent.favoriteDish.ingredients.map(ingredient=>({...ingredient}))}}))}}
// console.log(man7FullCopy)
console.log(JSON.stringify(man7FullCopy, null, 2));