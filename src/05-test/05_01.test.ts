import {createGreetingMessage, ManType} from "./05_01";


let people:Array<ManType>=[
    {name: "Andrey Ivanov", age: 32},
    {name: "Alexandr Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18}
]


beforeEach(()=> people=[
    {name: "Andrey Ivanov", age: 32},
    {name: "Alexandr Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18}])

test("should get array of greeting messages", ()=>{
    const messages = createGreetingMessage(people)
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello Andrey. Welcome to IT-Incubator")
    expect(messages[1]).toBe("Hello Alexandr. Welcome to IT-Incubator")
    expect(messages[2]).toBe("Hello Dmitry. Welcome to IT-Incubator")
})