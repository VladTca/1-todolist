export const usersArray1=['Dimych', 'Natasha', 'Valera', 'Katya', 'Viktor', 'Ignat']

export const usersObj={
    '0' : 'Dimych',
    '1' : 'Natasha',
    '2' : 'Valera',
    '3' : 'Katya',
    '4' : 'Viktor',
    '5' : 'Ignat'
}

type usersType={
    [key:string]:{id:number,name:string}
}

let users:usersType ={
    '101' : {id:101, name:'Dimych'},
    '102' : {id:102, name:'Natasha'},
    '10223' : {id:10223, name:'Valera'},
    '121304' : {id:121304, name:'Katya'},
    '1055' : {id:1055, name:'Viktor'},
    '106' : {id:106, name:'Ignat'}
}

//users[101]
var usern={id:100500,name:'Igor'}

users[usern.id]=usern
delete users[usern.id]
users[usern.id].name='Vitya'




export const userArray = [
    {id:101, name:'Dimych'},
    {id:102, name:'Natasha'},
    {id:10223, name:'Valera'},
    {id:121304, name:'Katya'},
    {id:1055, name:'Viktor'},
    {id:106, name:'Ignat'}
]

// userArray.find(u=>u.id===121304)
userArray.push(usern)
// or
// var userCopy =[...userArray.filter(u=>u.id!==usern.id),usern] //or use filter and push instead of
// var usersArray=userArray.filter(u=>u.id!==usern.id)

