type usersType={
    [key:string]:{id:number,name:string}
}

let uses : usersType


beforeEach(()=>{
uses={
    '101' : {id:101, name:'Dimych'},
    '102' : {id:102, name:'Natasha'},
    '10223' : {id:10223, name:'Valera'},
    '121304' : {id:121304, name:'Katya'},
    '1055' : {id:1055, name:'Viktor'},
    '106' : {id:106, name:'Ignat'}
}

})


test("should be corresponding from obj",()=>{
 uses['121304'].name='Ekaterina' //or use users
    uses['101'].name='DSimaych'


    expect(uses['101']).toEqual({id:101, name:'DSimaych'})
    expect(uses['102'].name).toBe('Natasha')
    expect(uses['10223'].name).toBe('Valera')
    expect(uses['121304'].name).toBe('Ekaterina')
    expect(uses['1055'].name).toBe('Viktor')
    expect(uses['106'].name).toBe('Ignat')

})

test("should delete corresponding from obj",()=>{

    delete uses['121304']
    expect(uses['121304']).toBeUndefined()
})
