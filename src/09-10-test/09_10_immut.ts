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
export type UserWithBooksType = UserType & {
    books: Array<string>
}
type CompanyType = { id: number, name: string };
export type UserWithCompaniesType = {
 companies: Array<CompanyType>
}

export function updateCompanyTitle2 (companies:{[key:string]:Array<CompanyType>},userName:string,companyId:number,NewTitle:string) {

    return {
        ...companies,
        [userName]:companies[userName].map((c:any) => c.id === companyId ? {...c,name:NewTitle} : c)
    }

}

export function updateCompanyTitle(u: UserWithLaptopType & UserWithCompaniesType, id: number, name: string) {
    const copy = {
        ...u,
        companies: u.companies.map(c => c.id === id ? {...c, name} : c)
    }
    return copy
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, book: string) {
    const copy = {
        ...u,
        books: u.books.filter(b => b !== book)
    }
    return copy
}
export function updateBooks(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    const copy = {
        ...u,
        books: u.books.map(b => b === oldBook ? newBook : b)
    }
    return copy
}


export function addBook(u: UserWithLaptopType & UserWithBooksType , newBook: string[]) {
    const copy = {
        ...u,
        books: [...u.books, ...newBook]
    }
    return copy
}


export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    const copy = {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
    return copy
}

export function upgradeLaptop(u: UserWithLaptopType, laptop: string) {
    const copy = {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
    return copy
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
