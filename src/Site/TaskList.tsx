// @flow
import * as React from 'react';
import {TaskType} from "../App";
import {useState} from "react";

type FilterValuesType = "all" | "need" | "done";

type Props = {
    img: string
    title: string
    description: string
    list: TaskType[]
    setList: (tasks: TaskType[]) => void
    deleteTask: (taskId: number, list: TaskType[], setList: (tasks: TaskType[]) => void,) => void
};

export const TaskList = ({img, description, title, list, setList, deleteTask}: Props) => {
    let [filter, setFilter] = useState<FilterValuesType>("all");

    let tasksForTodolist = list;

    if (filter === "need") {
        tasksForTodolist = list.filter(t => t.isDone === false);
    }
    if (filter === "done") {
        tasksForTodolist = list.filter(t => t.isDone === true);
    }


    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }


    return (
        <div>
            <div className='list'>
                <div className='avatar'>
                    <img src={img} style={{width: '50px', height: '50px', borderRadius: '50%'}}/>
                    <h2>{title}</h2>
                </div>
                <p>{description}</p>
                <input type='text'/>
                <button>(っ°◡°)っ</button>
                <ul className='item'>
                    {tasksForTodolist.map(el => {
                        return (
                            <li key={el.id}>
                                <input type='checkbox' checked={el.isDone}/>
                                <span>{el.task}</span>
                                <button onClick={() => deleteTask(el.id, list, setList)}>x</button>
                            </li>
                        )
                    })}
                </ul>

                <button onClick={() => {
                   changeFilter("all")
                }}>
                    All
                </button>
                <button onClick={() => {
                    changeFilter("need")
                }}>
                    Need
                </button>
                <button onClick={() => {
                    changeFilter("done")
                }}>
                    Done
                </button>
            </div>

        </div>

    );
};