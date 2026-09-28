const arr1=['apple','banana','gavava']
const arr2=['patato','tamato','spnish']

const finalArray=arr1.concat(arr2)//concat() menthod can concatinate two arrays as well
console.log(finalArray)
const withSpread = [...arr1, ...arr2]
//with spread we can collable multiple arrays togather 
console.log(withSpread)
const arr3 = ['red','blue','purple']
const spread2= [...arr1, ...arr2, ...arr3]
console.log(spread2)
//if we have nested array like multiple array inside array inside array like structure , we can use Array.flat(range) to generete into single array
const arr4=[3,6,[4,1],[2,9,[10,7]]]
console.log(arr4.flat(Infinity))
//isArray() method is use to check is it an array of not, gives boolean value
console.log(Array.isArray("Pragya"))
//from() is use to generete a array from given string
console.log(Array.from("Akshay"))
const a1=20
const a2=500
const a3=480
/* with the help of Array.of() method we can create array of given constances 
of(const1,const2...const3)*/
console.log(Array.of(a1,a2,a3))