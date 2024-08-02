export type UserType = {
    name: string
    hair: number
    address: {
        title: string
    }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export function moveUser(u: UserWithLaptopType, city: string) {
    const copy = {
        ...u,
        address: {
            ...u.address,
            title: city
        }
    }
    return copy

}


export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    };
    // copy.hair = u.hair / power;
    return copy
}
