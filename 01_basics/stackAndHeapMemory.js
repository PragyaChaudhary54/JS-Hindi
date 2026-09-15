/*Primitive datatypes use stack memory allocation and stack uses call by value means it generets a copy of the original value , whenever a change occures to copy then it will not affect its original value */
let myName="pragya"
let myNewName=myName
myNewName="Akshay"

console.log(myName)
console.log(myNewName)
/*Non-primitive data types uses heap memory allocation, and heap usues call by referance so whenever a call changes occur to other value it will definately change the original value */
let user1={
    id:"1919",
    email:"email@exm.com"
}
let user2=user1;
user1.id="2020"
console.log(user1.id)
console.log(user2.id)