import {student, StudentType} from "../02-test/02";

export const sum = (a:number,b:number)=>{
    return a+b
}
export function sum2(a:number,b:number){
    return a+b
}
export function addSkill2(st:StudentType, skill:string) {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const addSkill=(st:StudentType, skill:string)=> {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s:StudentType) {
    s.isActive=true
}

export function doesStudentLiveIn(student: StudentType, cityName: string) {
    return student.address.city.title === cityName
}