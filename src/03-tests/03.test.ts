import {StudentType} from "../02-test/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";


let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: 'Dimich',
        age: 32,
        isActive: false,
        address: {
            streetTitle: 'Surganova 2',
            city: {
                title: 'Minsk',
                countryTitle: 'Belarus'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'React'
            },
        ]
    }
})




test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3);
    addSkill(student, 'JS');

    expect(student.technologies.length).toBe(4);

    expect(student.technologies[3].title).toBe('JS');
    expect(student.technologies[3].id).toBeDefined(); //id должен быть определен


})

test('student should be active', () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);
    expect(student.isActive).toBe(true);


})

test('student live in Minsk?', () => {
    let result=doesStudentLiveIn(student, 'Minsk');
    let result2=doesStudentLiveIn(student, 'Moscow');
    expect(result).toBe(true);
    expect(result2).toBe(false);

    // expect(student.address.city.title).toBe('Minsk');
})

