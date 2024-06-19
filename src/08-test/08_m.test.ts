type UserType = {
    name: string
    age: number
}

function increseAge(u: UserType) {
    u.age = u.age + 1
}


test('big test', () => {
    var user = {
        name: 'Dimych',
        age: 32
    }
})

test('ARRAY test', () => {
    var users = [

        {
            name: 'Dimych',
            age: 32
        },
        {
            name: 'Natasha',
            age: 31
        }

    ]type UserType = {
        name: string
        age: number
    }

    function increaseAge(u: UserType) {
        u.age = u.age + 1;
    }

    test('big test', () => {
        var user: UserType = {
            name: 'Dimych',
            age: 32
        };

        increaseAge(user);
        expect(user.age).toBe(33);

        const superman = user;
        superman.age = 1000;
        expect(superman.age).toBe(1000);
    });

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
        admins.push({ name: 'Viktor', age: 33 });

        expect(users[2]).toEqual({ name: 'Viktor', age: 33 });
    });

})

var admins = users;
admins.push({name: 'Viktor', age: 33})

expect(users[3]).toEqual({name: 'Viktor', age: 33})

increseAge(user);
expect(user.age).toBe(33)

const superman = user
superman.age = 1000
expect(superman.age).toBe(1000)