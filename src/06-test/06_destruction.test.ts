import {ManType} from "./destructuring";


let props: ManType;


beforeEach(() => {
    props = {
        name: "Dimych",
        age: 32,
        lessons: [
            {title: "1"},
            {title: "2"}
        ],
        address: {
            street: {
                title: "Nezalezhnosti street"
            }
        }
    }
})



test("", () => {



// const age = props.age
// const lessons = props.lessons
    const {age, lessons} = props
    const {title} = props.address.street

    expect(age).toBe(32);
    expect(lessons.length).toBe(2)
    expect(title).toBe("Nezalezhnosti street")
})