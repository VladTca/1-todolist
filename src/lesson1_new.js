//примитивы
//

//ссылочные
//object, array, functions

//особенности ссылочныъ типов данныю

//более сложная структура
//имеют свойства и методы
//ссылочный тип

// const users1 = {
//   //#123456
//   id: 1,
//   name: 'Bob',
//   isStudent: true,
// };

// const users2 = users1; ////#123456
// users2.isStudent = false;
// // console.log('users2: ', users2); //users2:  { id: 1, name: 'Bob', isStudent: true }
// console.log('users1: ', users1); //users1:  { id: 1, name: 'Bob', isStudent: false }
// console.log('users2: ', users2);

// console.log(users1 === users2);//true

// const users1 = {
//   //#123456
//   id: 1,
//   name: 'Bob',
//   isStudent: true,
// };

// const users2 = {
//   // #890--99876
//   id: users1.id,
//   name: users1.name,
//   isStudent: users1.isStudent,
// };

// console.log(users1 === users2); //false
// console.log(users1 == users2); //false

// const a = {
//   //#111
//   id: '1',
//   name: 'Bob',
// };

// const b = a; //#111
// b.name = 'Alex';

// console.log(a === b);
// console.log(a); //{ id: '1', name: 'Alex' }

// const a = [];//#4444
// const b = a;
// console.log(a === b); //true

// const a = (a, b) => {
//   return a + b;
// };
// console.log(typeof a);

// const b = a;

// console.log(a === b); //true

// const users1 = {
//   // #12345
//   id: 1,
//   name: 'Bob',
//   isStudent: true,
// };

// const users2 = {
//   // #890--99876
//   id: users1.id,
//   name: users1.name,
//   isStudent: users1.isStudent,
// };

//spread operator
// const users1 = {
//   // #12345
//   id: 1,
//   name: 'Bob',
//   isStudent: true,
// };

// const user2 = { ...users1 }; //#44444

// console.log('user2: ', user2);//user2:  { id: 1, name: 'Bob', isStudent: true }
// console.log(users1 === user2);//false

//1) видим ссылочный тип данных -> мы делаем копию -> изменяем копию и работаем с ней

// const users = [
//   {
//     id: 1,
//     name: 'Bob',
//     isStudent: true,
//   },
//   {
//     id: 2,
//     name: 'Alex',
//     isStudent: true,
//   },
//   {
//     id: 3,
//     name: 'Ann',
//     isStudent: true,
//   },
//   {
//     id: 4,
//     name: 'Donald',
//     isStudent: true,
//   },
// ];

// const result = users.pop();
// console.log('users: ', users);

// const result1 = [...users].pop();
// console.log('users: ', users);

// const superUser = {
//   //#123
//   id: 10,
//   name: 'Clementina DuBuque',
//   username: 'Moriah.Stanton',
//   email: 'Rey.Padberg@karina.biz',
//   address: {
//     //#4444
//     street: 'Kattie Turnpike',
//     suite: 'Suite 198',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     geo: {
//       //#555
//       lat: '-38.2386',
//       lng: '57.2232',
//     },
//   },
//   phone: '024-648-3804',
//   website: 'ambrose.net',
//   company: {
//     name: 'Hoeger LLC',
//     catchPhrase: 'Centralized empowering task-force',
//     bs: 'target end-to-end models',
//   },
// };

// const superUserCopy = { ...superUser };
// superUserCopy.address.city = 'Minsk';

// console.log('initial superUser: ', superUser.address.city); //initial superUser:  Minsk
// console.log('copy super user: ', superUserCopy.address.city); //copy super user:  Minsk

// const superCopy2 = {
//   ...superUser,
//   address: { ...superUser.address, city: 'Minsk', geo: { ...superUser.address.geo, lat: 'test value' } },
// };

// console.log('initial superUser: ', superUser.address.city); //initial superUser:  Lebsackbury
// console.log('copy super user: ', superCopy2.address.city); //copy super user:  Minsk
// console.log('initial geo', superUser.address.geo.lat); //initial geo -38.2386
// console.log('after geo copy', superCopy2.address.geo.lat); //after geo copy test value

// const superUser = {
//   //#123
//   id: 10,
//   name: 'Clementina DuBuque',
//   username: 'Moriah.Stanton',
//   email: 'Rey.Padberg@karina.biz',
//   address: {
//     //#4444
//     street: 'Kattie Turnpike',
//     suite: 'Suite 198',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     geo: {
//       //#555
//       lat: '-38.2386',
//       lng: '57.2232',
//     },
//   },
//   phone: '024-648-3804',
//   website: 'ambrose.net',
//   company: {
//     name: 'Hoeger LLC',
//     catchPhrase: 'Centralized empowering task-force',
//     bs: 'target end-to-end models',
//   },
// };

// const structuredCloneCopy = structuredClone(superUser);
// structuredCloneCopy.address.geo.lat = 'structured clone test value';

// console.log('super user: ', superUser.address.geo.lat); //super user:  -38.2386
// console.log('structured clone copy: ', structuredCloneCopy.address.geo.lat); //structured clone copy:  structured clone test value

//деструктуризация

//объекты

//case1
// const employee = {
//   firstName: 'Ivan',
//   lastName: 'Ivanov',
//   middleName: 'Ivanovich',
// };

// const firstName = employee.firstName;
// console.log(firstName); //Ivan

// const { firstName, lastName } = employee;

// console.log(firstName); //Ivan
// console.log(lastName); //Ivanov

//case2

// const employee = {
//   firstName: 'Ivan',
//   lastName: 'Ivanov',
//   middleName: 'Ivanovich',
// };

// const firstName = 'Nina';

// const { firstName: name, lastName } = employee;

// console.log('firstName', firstName); //firstName Nina
// console.log('name', name); //name Ivan

//

// const user = {
//   firstName: 'Ivan',
//   lastName: 'Ivanov',
//   middleName: 'Ivanovich',
//   //   role: 'admin'
// };

// const { middleName, role = 'welcome user!' } = user;
// console.log('role: ', role);//role:  welcome user!

// const user = {
//   firstName: 'Ivan',
//   lastName: 'Ivanov',
//   middleName: 'Ivanovich',
//   role: 'admin',
// };

// const { middleName, role = 'welcome user!' } = user;
// console.log('role: ', role); //role:  admin

//
// const employee = {
//   firstName: 'Ivan',
//   lastName: 'Ivanov',
//   middleName: 'Ivanovich',
//   message: 'Hello world!',
//   permission: {
//     canEdit: true,
//     canDelete: false,
//     role: 'user',
//   },
// };

// const {
//   firstName,
//   permission,
//   permission: { canDelete, canEdit },
// } = employee;

// console.log('canDelete: ', canDelete); //canDelete:  false
// console.log('canEdit: ', canEdit); //canEdit:  true

//array
// const colors = ['red', 'blue', 'green', 'white', 'black'];

// // const firstName = colors[0];
// // console.log(firstName);//red

// const [firstElement, secondElement, greenColor] = colors;

// console.log(firstElement); //red
// console.log(secondElement); //blue
// console.log(greenColor); //green

//case2
// const colors = ['red', 'blue', 'green', 'white', 'black'];

// const [firstValue, secondValue, , whiteValue] = colors;

// console.log(firstValue); // red
// console.log(whiteValue); //white

//case3
// const colors = ['red', ['first value', 'second value'], , 'white', 'black'];

// const [firstValue, [nestedValue1, nestedValue2], testValue = 'test'] = colors;

// console.log(firstValue); //red
// console.log(nestedValue1); //first value
// console.log(nestedValue2); //second value
// console.log(testValue); //test

// const arr = [];
// const [testVal] = arr;
// console.log(testVal); //undefined

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function Hello([firstValue, ...rest]) {
//   console.log(firstValue);
//   console.log(rest);
// }

// Hello(arr);
