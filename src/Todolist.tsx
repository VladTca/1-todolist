import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType, TasksType} from './App';
import {Button} from "./Button";


type PropsType = {
    id: number
    title: string
    tasks: Array<TasksType>
    students: Array<string>
    removeTask: (taskId: string, todolistId: number) => void
    changeFilter: (value: FilterValuesType, todolistId: number) => void
    addTask: (title: string, todolistId: number) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: number) => void
    removeTodolist: (id: number) => void
    filter: FilterValuesType
    removeAllTodolists: () => void
    removeAllTasksInOneTodo: (todolistId: number) => void
}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            // addTask();
        }
    }

    const removeTodolistHandler = () => {
        props.removeTodolist(props.id)
    }

    const addTaskHandler = () => {
        props.addTask(title, props.id)
    }

    const removeTaskHandler = (taskId: string) => {
        props.removeTask(taskId, props.id)
    }


    const changeFilterHandler = (value: FilterValuesType) => {
        props.changeFilter(value, props.id);
    }


    return <div>

        <h3> {props.title}
            <Button title={'X'} onClickhandler={removeTodolistHandler}/>


        </h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyUp={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <Button title={'+'} onClickhandler={addTaskHandler}/>
            {error && <div className="error-message">{error}</div>}

        </div>

        <ul>
            {
                props.tasks.map(t => {
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.taskId, newIsDoneValue, props.id);
                    }
//  removeTask: (taskId: string, todolistId: number) => void

                    return <li key={t.taskId} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
                        <span>{t.title}</span>
                        <Button title={'X'} onClickhandler={() => removeTaskHandler(t.taskId)}/>
                        {/*<button onClick={() => {'removeTask'}}>x</button>*/}
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? "active-filter" : ""}
                    onClick={() => {changeFilterHandler("all")
                    }}>All
            </button>
            <button className={props.filter === 'active' ? "active-filter" : ""}
                    onClick={() => {changeFilterHandler('active')
                    }}>Active
            </button>
            <button className={props.filter === 'completed' ? "active-filter" : ""}
                    onClick={() => {changeFilterHandler('completed')
                    }}>Completed
            </button>
        </div>
        <Button title={'RemoveTasks'} onClickhandler={() => props.removeAllTasksInOneTodo(props.id)}/>
        <p></p>
        {
            props.students.map((el) => {
                return (
                    <div>{el}</div>
                )
            })
        }
    </div>
}


