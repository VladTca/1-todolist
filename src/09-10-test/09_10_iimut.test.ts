import {makeHairstyle, moveUser, upgradeLaptop, UserType, UserWithLaptopType} from "./09_10_immut";


test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        }
    };



    const awesomeUser = makeHairstyle(user,2);


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

     const movedUser = moveUser(user,'Kiev');

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

    const upUser = upgradeLaptop(user,'macbook');
    expect(user).not.toBe(upUser);
    expect(user.address).toBe(upUser.address);
    expect(user.laptop).not.toBe(upUser.laptop);
    expect(upUser.laptop.title).toBe('macbook');
    expect(user.laptop.title).toBe('ZenBook');

})