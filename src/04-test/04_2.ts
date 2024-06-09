import {CityType, governmentBuildingsType} from "../02-test/02_02";

export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export function getBuildingsWithStaffCountGreaterThen(buildings: Array<governmentBuildingsType>, number: number) {
    return buildings.filter(b => b.staffCount > number)
}