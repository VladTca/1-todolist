export type ManType={
    name:string;
    age:number
}
 const people:Array<ManType>=[
    {name: "Andrey Ivanov", age: 32},
    {name: "Alexandr Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18}
]

const dimychTransformator=(man:ManType)=>({

        stack:["css","html","js","tdd","react"],
        firstName:man.name.split(" ")[0],
        lastName:man.name.split(" ")[1]

})

const devs1=[
    {
        stack:["css","html","js","tdd","react"],
        firstName:"Andrew",
        lastName:"Ivanov"
    },
    {
        stack:["css","html","js","tdd","react"],
        firstName:"Alexander",
        lastName:"Petrov"
    },
    {
        stack:["css","html","js","tdd","react"],
        firstName:"Dmitry",
        lastName:"Sidorov"
    }
]

const dev2=[
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]

const devs3=people.map(dimychTransformator)
const devs4 =people.map(man=>({
    stack:["css","html","js","tdd","react"],
    firstName:man.name.split(" ")[0],
    lastName:man.name.split(" ")[1]
}))

const messages = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`);

export const createGreetingMessage = (man: ManType[]) =>{
    return people.map(man =>
        `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`

    )}