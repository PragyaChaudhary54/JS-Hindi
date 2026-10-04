//split function use to get any number of values in it at he run time, will return all in array form
function funValues(...num1)
{
 return num1
}
console.log(funValues(299,900,627,952))

const myObj={
    objName:"Kunal",
    age:38
}
function customerData(myObj)
{
 console.log(`name of cudtomer is ${myObj.objName} and age is : ${myObj.age}`)
}
console.log(customerData(myObj))