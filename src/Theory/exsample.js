
// В JavaScript map — это высокоуровневый метод массивов, который используется для преобразования массива, применяя функцию к каждому его элементу и создавая новый массив из результатов.

// Квадраты чисел
const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.forEach(num => console.log(num ** 3))
// console.log(squaredNumbers)// [ 1, 4, 9, 16, 25 ]
// console.log(numbers)// [ 1, 4, 9, 16, 25 ]

// Извлечение свойств объектов
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
const names = people.map(el => el.name)
// console.log(names); // ["Alice", "Bob", "Charlie"]

// Преобразование объектов с добавлением нового свойства
const products = [
  { name: "Apple", price: 100 },
  { name: "Banana", price: 80 },
  { name: "Cherry", price: 120 }
];
// const updatedProducts = products.map(el => {
//   return {...el, inStock: true}
// })
const updatedProducts = products.map(el => {
  el.inStock = true;
  // return {...el, inStock: true}
  return el
})
console.log(updatedProducts);
/*
[
  { name: "Apple", price: 100, inStock: true },
  { name: "Banana", price: 80, inStock: true },
  { name: "Cherry", price: 120, inStock: true }
]
*/