type UserType = {
    name: string
    age: number
    address?: {
        title: string
    }

}

function increaseAge(u: UserType) {
    u.age = u.age + 1;
}

//
// test('big test', () => {
//     var user: UserType = {
//         name: 'Dimych',
//         age: 32
//
//     };
//
//     increaseAge(user);
//     expect(user.age).toBe(33);
//
//     const superman = user;
//     superman.age = 1000;
//     expect(superman.age).toBe(1000);
// });

test('ARRAY test', () => {
    var users: UserType[] = [
        {
            name: 'Dimych',
            age: 32
        },
        {
            name: 'Natasha',
            age: 31
        }
    ];

    var admins = users;
    admins.push({name: 'Viktor', age: 33});

    expect(users[2]).toEqual({name: 'Viktor', age: 33});
});
test('value type test', () => {
    var userCount = 100;
    var adminsCount = userCount

    adminsCount = adminsCount + 1

    expect(userCount).toBe(100);
    expect(adminsCount).toBe(101);

});

test('reference type test', () => {
    var user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }

    };
    // let address = user.address
    var user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: user.address
    }
    if (user2.address) {
        user2.address.title = 'Kanary';
    }

    expect(user.address?.title).toBe('Kanary');
    expect(user2.address?.title).toBe('Kanary');
})
test('reference array type test', () => {
    const addresses = {
        title: 'Minsk'
    }


    var user: UserType = {
        name: 'Dimych',
        age: 32,
        address: addresses

    };
    // let address = user.address
    var user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: addresses
    }

    const users = [user, user2, {name: 'Viktor', age: 33, address: addresses}]
    const admins = [user, user2];
    admins[0].name = 'Dima'


    expect(users[2].address?.title).toBe('Minsk');
    expect(admins[0].name).toBe('Dima');
    expect(user.name).toBe('Dima')
})

test('sort array test', () => {
    const letters = ['c', 'a', 'b', 'd', 'e', 'f'];
    letters.sort();
    expect(letters).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
})

function passportist(letter: any) {
    const copy = [...letter] //copy letter
    copy.sort()
    return copy
}