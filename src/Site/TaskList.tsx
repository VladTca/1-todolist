// @flow
import * as React from 'react';

type Props = {
    img: string
    title: string
    description: string
};

export const TaskList = ({img, description, title}: Props) => {
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
                    <li>
                        <input type='checkbox'/>
                        <span>Shoes</span>
                        <button>x</button>
                    </li>
                    <li>
                        <input type='checkbox'/>
                        <span>Shoes</span>
                        <button>x</button>
                    </li>
                    <li>
                        <input type='checkbox'/>
                        <span>Shoes</span>
                        <button>x</button>
                    </li>
                </ul>
                <button>All</button>
                <button>Need</button>
                <button>Done</button>
            </div>

        </div>

    );
};