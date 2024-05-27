import React, {useState} from 'react';
import './App.css';
import {TaskList} from "./Site/TaskList";
import {MainTitle} from "./Site/MainTitle";
import { Example } from './Theory/Example';

// Что поделать:
// 1. Напиши функцию удаления тасок для второго списка petsTasks
// 2. Выведи текст "Упс, тут ничего нет" если в список тасок пуст
// 3. Попробуй сделать рабочими фильтры тасок по кнопкам All, Need и Done


export type TaskType = {
    id: number
    task: string
    isDone: boolean
}

function App() {
    const description = 'A shopping list is a tool that helps to organize and simplify the process of buying goods. It can be used for a variety of purposes, including daily shopping, holiday planning, travel, and more.'

    const [shoppingList, setShoppingList] = useState([
        {id: 1, task: 'Shoes', isDone: false},
        {id: 2, task: 'Tee shirt', isDone: false},
        {id: 3, task: 'Sunglasses', isDone: true}
    ])

    // const [petsTasks, setPetsTasks]=useState([
    //     {id: 1, task: "Trim the cat's claws", isDone: false},
    //     {id: 2, task: 'Groomer for the dog', isDone: false},
    //     {id: 3, task: 'Clean the carrier', isDone: true},
    //     {id: 3, task: 'Buy diapers', isDone: true}
    // ])

    const deleteTask = (taskId: number) => {
        const filteredTasks = shoppingList.filter(el => {
                return el.id !== taskId
            })
        setShoppingList(filteredTasks)
    }

    return (
        <div>
            {/* <Example/> */}
            <MainTitle className={"title"} title={"Preparing for vacation"}/>
            <div className='App'>
                <TaskList list={shoppingList} img={'/shopping.png'} title={'Shopping list'} description={description} deleteTask={deleteTask}/>
                {/*<TaskList list={petsTasks} img={'/dog.png'} title={'Pets'} description={description}/>*/}
            </div>
        </div>
    );
}
//test
export default App;

//Коллбэк-функция – это функция, которую мы передаем в другую функцию в качестве аргумента с целью вызвать её позже.
// Давайте рассмотрим простой пример. Представьте, что у вас есть две функции: одна называется "готовить ужин", а другая - "есть ужин". Вы не можете начать есть ужин, пока не приготовите его. Так что вы передаете функцию "есть ужин" в функцию "готовить ужин" в качестве коллбэк-функции. Тогда функция "готовить ужин" может вызвать функцию "есть ужин" сразу после того, как ужин будет готов.
// В контексте программирования это позволяет нам контролировать порядок выполнения функций, особенно когда мы работаем с асинхронными операциями, такими как запросы к серверу или таймеры.

//Метод filter используется, когда вы хотите пройти по массиву и выбрать из него определенные элементы. Он создает новый массив, в который включает только те элементы, которые удовлетворяют определенному условию.
// Например, у вас есть массив чисел, и вы хотите получить только четные числа. Вы бы использовали filter для этого.
// Метод map, с другой стороны, используется, когда вы хотите пройти по массиву и что-то изменить в каждом элементе. Он создает новый массив, в котором каждый элемент является результатом применения функции к каждому элементу исходного массива.
// Например, у вас есть массив чисел, и вы хотите удвоить каждое число. Вы бы использовали map для этого.