import {governmentBuildingsType, HouseType} from "../02-test/02_02";


export const getStreetsTitlesOfGovernmentsBuildings = (buildings: Array<governmentBuildingsType>) => {
    return buildings
        .filter(b => b.type === 'Hospital' || b.type === 'Fire station')
        .map(b => b.address.street.title)
}

export const getStreetsTitlesofHouses = (buildings: Array<HouseType>) => {
    return buildings.map(b => b.address.street.title)
}

export const createMessage = (houses: Array<HouseType>) => {
    return houses.map(h=>`Hello gays from ${h.address.street.title}. Welcome to our city. I hope you enjoy your stay there.`)
}