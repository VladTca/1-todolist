import {
    addBook,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBooks, updateCompanyTitle, updateCompanyTitle2,
    upgradeLaptop,
    UserType,
    UserWithBooksType, UserWithCompaniesType,
    UserWithLaptopType
} from "./09_10_immut";


test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        }
    };


    const awesomeUser = makeHairstyle(user, 2);


    expect(awesomeUser.hair).toBe(16);
    expect(user.hair).toBe(32);
    expect(awesomeUser.address).toBe(user.address);
})

test('change adress', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Kiev');

    expect(user).not.toBe(movedUser)
    expect(movedUser.address.title).toBe('Kiev');
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop);
})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const upUser = upgradeLaptop(user, 'macbook');
    expect(user).not.toBe(upUser);
    expect(user.address).toBe(upUser.address);
    expect(user.laptop).not.toBe(upUser.laptop);
    expect(upUser.laptop.title).toBe('macbook');
    expect(user.laptop.title).toBe('ZenBook');

})

test('house number', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = moveUserToOtherHouse(user, 99);


    expect(user).not.toBe(userCopy);
    expect(user.books).toBe(userCopy.books);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).not.toBe(userCopy.address);
    expect(userCopy.address.house).toBe(99);
})

test('add book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = addBook(user, ['ts', 'rest Api']);

    expect(user).not.toBe(userCopy);
    expect(user.books).not.toBe(userCopy.books);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(userCopy.books).toStrictEqual(['css', 'html', 'js', 'react', 'ts', 'rest Api'])
})

test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = updateBooks(user, 'js', 'ts');


    expect(user).not.toBe(userCopy);
    expect(user.books).not.toBe(userCopy.books);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(userCopy.books).toStrictEqual(['css', 'html', 'ts', 'react'])
})

test('remove book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = removeBook(user, 'js');

    expect(user).not.toBe(userCopy);
    expect(user.books).not.toBe(userCopy.books);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(userCopy.books).toStrictEqual(['css', 'html', 'react'])
})

test('update company Tytle', () => {
    let user: UserWithLaptopType & UserWithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'ZenBook'

        },
        companies: [{id: 1, name: 'Epam'}, {id: 2, name: 'IT-INCUBATOR'}]
    }

    const userCopy = updateCompanyTitle(user, 1, 'Meta');


    expect(user).not.toBe(userCopy);
    expect(user.companies).not.toBe(userCopy.companies);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(userCopy.companies).toStrictEqual([{id: 1, name: 'Meta'}, {id: 2, name: 'IT-INCUBATOR'}])
})

test('update company', () => {

    let companies = {
        'Dimych': [{id: 1, name: 'Epam'}, {id: 2, name: 'IT-INCUBATOR'}],
        'Alex': [{id: 2, name: 'IT-INCUBATOR'}]
    }
    let companyCopy = {...companies}

    const userCopy = updateCompanyTitle2(
        companies,
        "Dimych",
        1,
        'Meta');

    expect(companies).not.toBe(companyCopy);
    expect(companies.Dimych).toBe(companyCopy.Dimych);
    expect(userCopy).toStrictEqual({Dimych: [{id: 1, name: 'Meta'}, {id: 2, name: 'IT-INCUBATOR'}], Alex: [{id: 2, name: 'IT-INCUBATOR'}]})
    expect(userCopy['Dimych']).not.toBe(companies['Dimych']);
    expect(userCopy['Alex']).toBe(companies['Alex']);
    expect(userCopy['Dimych'][0].name).toBe('Meta')
})

