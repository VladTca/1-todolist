export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<governmentBuildingsType>
    citizensNumber: number
}

export type governmentBuildingsType = {
    type: 'Hospital' | 'Fire station'
    budget: number
    staffCount: number
    address: AddressType
}

export type HouseType = {
    buildedAT: number
    repaired: boolean
    address: AddressType
}

export type AddressType = {
    number?: number
    street: StreetType
}

export type StreetType = {
    title: string
}

