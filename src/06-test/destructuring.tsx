import React, {useState} from "react";


type LessonType = {
    title: string
}
export type ManType = {
    name: string
    age: number
    lessons: LessonType[]
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {

    title: string
    man: ManType
    food: Array<string>
    car: {
        model: string
    }

}


export const ManComponent: React.FC<PropsType> = (props) => {
    // const{title}=props
    // const{name}=props.man;
    const{title,man:{name},...restProps}=props
    const [message,setMessage] = useState<string>('hello')
    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{name}</div>
            <div>{props.car.model}</div>

        </div>
    )
}