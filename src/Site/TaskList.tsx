// @flow
import * as React from 'react';
import {TaskType} from "../App";

type Props = {
    img: string
    title: string
    description: string
    list: TaskType[]
    setList: (tasks: TaskType[]) => void
    deleteTask:(taskId: number, list: TaskType[], setList: (tasks: TaskType[]) => void,) => void
};

export const TaskList = ({img, description, title, list, setList, deleteTask}: Props) => {
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
                    {list.map(el => {
                        return (
                            <li key={el.id}>
                                <input type='checkbox' checked={el.isDone}/>
                                <span>{el.task}</span>
                                <button onClick={() => deleteTask(el.id, list, setList)}>x</button>
                            </li>
                        )
                    })}
                </ul>
                <button>All</button>
                <button>Need</button>
                <button>Done</button>
                <button onClick={() => {
                    props.changeFilter("all")
                }}>
                    All
                </button>
                <button onClick={() => {
                    props.changeFilter("need")
                }}>
                    Need
                </button>
                <button onClick={() => {
                    props.changeFilter("done")
                }}>
                    Done
                </button>
            </div>

        </div>

    );
};