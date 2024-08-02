import {makeHairstyle, moveUser, UserType, UserWithLaptopType} from "./09_10_immut";


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

