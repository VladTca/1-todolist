// @flow
import * as React from 'react';
import {FilterValuesType, TaskType} from "../App";
import {ChangeEvent, useState} from "react";

// const deleteTask = (taskId: number, tasks: TaskType[], setTasks: (tasks: TaskType[]) => void) => {
//     const filteredTasks = tasks.filter(el => el.id !== taskId);
//     setTasks(filteredTasks);
//     if (filteredTasks.length === 0) {
//         alert('Упс, тут ничего нет')
//     }
// };
type Props = {
    img: string
    title: string
    description: string
    list: TaskType[]
    deleteTask: (taskId: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (task: string) => void
    changeTaskStatus: (taskId: string, taskStatus: boolean) => void
};

export const TaskList = ({
                             img,
                             description,
                             title,
                             list,
                             deleteTask,
                             changeFilter,
                             addTask,
                             changeTaskStatus
                         }: Props) => {

// Данные---------------------------------------------------------------------------------------

    const [taskTitle, setTaskTitle] = useState('') //Для контролируемого инпута при добавлении тасок

// Добавление таски---------------------------------------------------------------------------------------

    const addTaskHandler = () => {
        if (taskTitle.trim() !== '') {
            addTask(taskTitle)
            setTaskTitle('')
        }
    }

    // const changeTaskStatusHandler = (taskId:string, event: ChangeEvent<HTMLInputElement>)=>{
    //     changeTaskStatus(taskId, event.currentTarget.checked)
    //     console.log(event.currentTarget.checked)
    // }

    return (
        <div>
            <div className='list'>
                <div className='avatar'>
                    <img src={img} style={{width: '50px', height: '50px', borderRadius: '50%'}}/>
                    <h2>{title}</h2>
                </div>
                <p>{description}</p>
                <input type='text'
                       value={taskTitle}
                       onChange={event => setTaskTitle(event.currentTarget.value)}
                       onKeyUp={event => {
                           if (event.key === 'Enter') {
                               addTaskHandler()
                           }
                       }}
                />
                <button onClick={() => {
                    addTaskHandler()
                }
                }>(っ°◡°)っ
                </button>
                {list.length === 0 ? (
                    <p>Упс...</p>
                ) : (
                    <ul className='item'>
                        {list.map(el => {

// Изменение статуса таски---------------------------------------------------------------------------------------

                            const changeTaskStatusHandler = (event: ChangeEvent<HTMLInputElement>) => {
                                const newStatusValue = event.currentTarget.checked
                                changeTaskStatus(el.id, newStatusValue)
                            }

                            return (
                                <li key={el.id}>
                                    <input type='checkbox' checked={el.isDone} onChange={changeTaskStatusHandler}/>
                                    <span>{el.task}</span>
                                    <button onClick={() => deleteTask(el.id)}>x</button>
                                </li>
                            )
                        })}
                    </ul>)
                }
                <button onClick={() => changeFilter('all')}>All</button>
                <button onClick={() => changeFilter('need')}>Need</button>
                <button onClick={() => changeFilter('done')}>Done</button>
            </div>

        </div>

    );
};