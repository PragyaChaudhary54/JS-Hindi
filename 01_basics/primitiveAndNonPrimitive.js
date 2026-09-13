/*---primitive dataTypes*/
const num=28
const isLoggedIn=true
const userName="Pragya"
const nullValue=null
const userEmail=undefined;
const id=Symbol('2290')
const anotherId=Symbol('2290')
const bigNumber=88377388383883n;

console.log(typeof(num))
console.log(typeof(isLoggedIn))
console.log(typeof(userName))
console.log(typeof(nullValue))
console.log(typeof(userEmail))
console.log(typeof(id))
console.log(id===anotherId)
console.log(typeof(bigNumber))

/*---non-primitive---*/
const ids=[29,278,902,2289]
let myObj=
{
 email:"pragya@test.com",
 roll_number:28282,
 is_passed:true
}

const myFunctionReturnValue=function(){
console.log("Hello its functions return value")
}
console.log(typeof(ids))
console.log(typeof(myObj))
console.log(typeof(myFunctionReturnValue))

