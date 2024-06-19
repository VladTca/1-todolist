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
    var users = [{
        name: 'Dimych',
        age: 32
    },
        {
            name: 'Natasha',
            age: 31
        },
        {
            name: 'Valera',
            age: 32
        }

    ]
})

increseAge(user);
expect(user.age).toBe(33)

const superman = user
superman.age = 1000
expect(superman.age).toBe(1000)

