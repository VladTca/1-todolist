import {student, StudentType} from "../02-test/02";
import {CityType, governmentBuildingsType, HouseType} from "../02-test/02_02";

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
export function addMoneyToBudget(building: governmentBuildingsType, budget: number){

    building.budget+=budget

}
export function repairHouse(houseType: HouseType) {
    houseType.repaired = true
}

export function toFireStaff(bilding: governmentBuildingsType, staffCountToFire: number){

    bilding.staffCount-=staffCountToFire
}

export function toHireStaff(bilding: governmentBuildingsType, staffCountToHire: number){
    bilding.staffCount+=staffCountToHire
}

export function createMessage(city: CityType){

    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} man.`
}