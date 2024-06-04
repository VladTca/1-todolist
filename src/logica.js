// //преобразование типов
// // String(), Number(), Boolean()
//
// let value;
// //ЯВНОЕ ПРЕОБРАЗОВАНИЕ
// //String()
// //number -> string
// value = 12
// value = String(value)
// value = 1242.43
// value = String(value)
// //boolean -> string
// value = true
// value = String(value) //'true'
// value = false
// value = String(value) //'false'
// //null -> string
// value = null
// value = String(value)
// //undefined -> string
// value = undefined
// value = String(value) //'undefined'
// //object -> string
// value = {}
// value = String(value)
// value = { name: 'Anastasia' }
// value = String(value)
// //array -> string
// value = [1,2]
// value = String(value) //'1,2'
//
// //toString()
// value = 15
// value = value.toString()
//
// // Number() - NaN (not a number)
// value = NaN
// value = '123'
// value = Number(value)
// value = '123.5'
// value = Number(value)
// value = '123,5'
// value = Number(value)
// value = 'qwerty'
// value = Number(value)
// value = ''
// value = Number(value) //0
// value = ''
// value = Number(value)
// value = '1e'
// value = Number(value)
// value = '1e6'
// value = Number(value)
// value = '002.3'
// value = Number(value)
// value = '002.3r3'
// value = Number(value)
// //boolean -> number
// value = true //1
// value = Number(value)
// value = false // 0
// value = Number(value)
// //null -> number
// value = null // 0
// value = Number(value)
// //undefined -> number
// value = undefined  //NaN
// value = Number(value)
// //object -> number
// value = {} //NaN
// value = Number(value)
// value = { name: 'Anastasia' } //NaN
// value = Number(value)
// //array -> number
// value = [] // 0
// value = Number(value)
// value = [1000]
// value = Number(value)
// value = [1,2,3]
// value = Number(value) //NaN
// value = ['200']
// value = Number(value)
// value = ['Anastasia']
// value = Number(value)
//
// //Вывод - false, null, [], ''(пустая строка) = 0
// // true = 1
// // undefined, {}, {name: 'Anastasia'}, {name: '12'}, [1,2,3]
// // ['Anastasia'] = NaN
// //строки=числа = равны числу в строке
//
// //parseInt()- для целых чисел
// value = '200'
// value = parseInt(value)
// value = '200qwerty'
// value = parseInt(value)
// value = 'qwerty200'
// value = parseInt(value)
// value = '2fk00'
// value = parseInt(value)
// value = '123.9'
// value = parseInt(value)
// value = '123,4'
// value = parseInt(value)
// value = '002.3r3'
// value = parseInt(value)
// value = '0'
// value = parseInt(value)
//
// //parseFloat() - преобразовывает числа с плавающей точкой
// value = '123.9'
// value = parseFloat(value)
// value = '123,4'
// value = parseFloat(value)
// value = '123.3qwerty'
// value = parseFloat(value)
// value = '123'
// value = +value
// value = '123.9'
// value = +value
//
// //Boolean()
// //true/false
// //string -> boolean
// value = ''
// value = Boolean(value)
// value = ' '
// value = Boolean(value)
// value = '1234'
// value = Boolean(value)
// value = 'false'
// value = Boolean(value)
// // только пустая строка = false
// //number -> boolean
// value = 0  //false
// value = Boolean(value)
// value = -1
// value = Boolean(value)
// value = -0  //false
// value = Boolean(value)
// //любое число кроме нуля и минус нуля - true
// //undefined -> boolean
// value = undefined //false
// value = Boolean(value)
// //null -> boolean
// value = null //false
// value = Boolean(value)
// //object -> boolean
// value = {}  //true
// value = Boolean(value)
// value = {name: 'Anastasia'}
// value = Boolean(value) //true
// value = {name: false}
// value = Boolean(value)
// //array -> boolean
// value = []
// value = Boolean(value)
// value = [false]
// value = Boolean(value)
//
// value = 0
// value = !!value
// value = 0
// value = !!value
// //!true = false
// //!!true = true
// //!false = true
// //!!false = false
// const arr = [12]
// value = !!arr.length
//
// //пустая строка '', 0, -0, NaN, null и undefined — false
//
// value = '123'
// //НЕЯВНОЕ ПРЕОБРАЗОВАНИЕ
// //математические операции
// //сложения
// //сочетание + и ""(строка) = строка
// value = '1' + '2'
// value = 'qwer' + 'ty'
// value = 12 + '3'
// value = '12' + 3
// value = 1 + 2 + 3 + '4' + 5 //'645'
// // value = 1 + 2 + 3 + '4' + 5 + 6 + 7 + 1000
// // value = 10 + ''
// value = 'true' + 10
// value = true + 10
// value = false + 10
// value = 10  + undefined //NaN
// // value = Number(undefined)
// // value = 10 + Number(undefined)
// // value = 10 + NaN
// value = 1 + false + true  + true + 10
// value = undefined + undefined
// value = 2 + undefined
// value = [10] + true //!
//
// //вычитание
// //js пытается преобразовать все значения к числам
// //(иключение сложение если есть строка)
// value = 10 - '9'
// value = 10 - Number('9')
// value = '10' - 9
// value = Number('10') - 9
// value = 10 - false //false = 0
// value = 10 - undefined
// value = 10 - null
// value = 10 - Number(null)
// value = [10] - true
// value = Number([10]) - Number(true)
//
// //умножение
// //js пытается преобразовать все значения к числам
// value = 100 * false
// value = 100 * Number(false)
// value = 100 * 'false'
// value = 100 * Number('false')
// value = 100 * '10'
// value = 100 * Number('10')
// value = [4] * true
// value = Number([4]) * Number(true) // 4 * 1
// value = Number([]) * Number(true) // 0 * 1
//
// //строгое и нестрогое сравнение
// // === ==
// value = '5' == 5
// value = '5' === 5
// value = false == '0'
// value = false == ''
// value = true === false

//логическое && || приведет к булевому типу 
// value = 0 && false
// value = 0 || false || true || '10'
//
//
// console.log('value:', value)
// console.log('typeof value:', typeof value)


const age = 16;
const url = age > 18 ? 'you can enter' : 'you can not enter'

console.log(url)

let hours = new Date().getHours()
let greeting = hours < 8 ? 'Good night' : hours < 12 ? 'Good morning' : hours < 20 ? 'Good day' : 'Good evening'
console.log(greeting)

let a = 5, b = 10
let c = a > b ? a + 'bigger than' + b : a < b ? b + 'bigger than' + a : a + 'equals' + b

console.log(c)

let age2 = 21
let category = age2 <= 12 ? 'child' :
    age2 <= 19 ? 'adolescent' :
        age2 <= 65 ? 'adult' : 'senior adult'

