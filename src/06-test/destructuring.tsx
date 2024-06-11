import React from "react";


type LessonType = {
    title: string
}
export type ManType = {
    name: string
    age: number
    lessons: [LessonType, LessonType]
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {

    title: string
    man: ManType

}


export const ManComponent: React.FC<PropsType> = (props) => {
    // const{title}=props
    // const{name}=props.man;
    const{title,man:{name}}=props

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{name}</div>

        </div>
    )
}