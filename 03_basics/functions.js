//values that we define while defining  function is known as paramters
function sumOfTwo(num1,num2){
    let result=num1+num2
    return result;
}
//values that we pass while we call functions is known as arguments 
const result=sumOfTwo(4,8)
console.log("result : "+result)

function isUserLoggedIn(username)
{
    if(username === undefined)
    {
        console.log("Please enter a valid username")
        return;
    }
    return `${username} is logged in`
}
console.log(isUserLoggedIn("Pragya"))