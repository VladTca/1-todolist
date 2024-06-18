import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();


    type todolistsType = {
        id: string;
        title: string;
        filter: FilterValuesType;
    }

    let [todolists, setTodolists] = useState<todolistsType[]>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    type TaskTypes = {
        id: string;
        title: string;
        isDone: boolean;
    }

    type todolistsTaskTypes = {
        todolistId: TaskTypes[];
    }


    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(id: string, todolistId: string) {
        let filteredTasks = tasks[todolistId].filter(t => t.id !== id)
        setTasks({...tasks, [todolistId]: filteredTasks})

        // let filteredTasks = tasks.filter(t => t.id != id);
        // setTasks(filteredTasks);
    }

    function addTask(title: string, todolistId: string) {
        let task = {id: v1(), title: title, isDone: false};
        let newTask = {...tasks[todolistId], task};
        setTasks({...tasks, [todolistId]: newTask})


        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
    }

    function changeStatus(taskId: string, isDone: boolean, todolistId: string) {
        let task = tasks[todolistId].map(t => t.id === taskId ? {
            ...t,isDone} : t);

        setTasks({...tasks, [todolistId]: task});
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        // let changeToDo = todolists.map((el) => el.id === todolistId ? {...el, filter: value} : el)
        // setTodolists(changeToDo)
let todo =todolists.find(tl=>tl.id===todolistId);
if (todo) {
    todo.filter=value;
    setTodolists([...todolists])
}


    }


    return (
        <div className="App">
            {todolists.map((el) => {
                let tasksForTodolist = tasks[el.id];

                if (!tasksForTodolist) {
                    tasksForTodolist = [];
                }

                if (el.filter === "active") {
                    tasksForTodolist = tasksForTodolist.filter(t => !t.isDone);
                }
                if (el.filter === "completed") {
                    tasksForTodolist = tasksForTodolist.filter(t => t.isDone);
                }


                return (
                    <Todolist
                        key={el.id}
                        id={el.id}
                        title={el.title}
                        todolistId={el.id}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={el.filter}
                    />);
            })}
        </div>
    );
}

export default App;
