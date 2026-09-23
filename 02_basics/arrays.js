const myArray1=[2,9,2,9,3]
const myArray2=['kartik','Akshay','Pragya']
// array in java script can contain difftent data types also
console.log(myArray1)
console.log(myArray2[2])//array[Number] will give the value at this index
const arr=new Array(2.33,4.88,8.99)
console.log(arr)
console.log(arr.push(100))//push method add the given value to the end of the array
console.log(arr.push(347))
console.log(arr.pop())//pop menthod retives and removes the last array value
console.log(arr)
console.log(arr.unshift(4))// unshift method add a given value to the start of the array and shifted the whole array by 1 index so not recommended
console.log(arr)
console.log(arr.shift())//shift() method removes the first value from the array and shift the whole array indexs by -1 means will sift left side whole array
console.log(arr)
console.log(arr.indexOf(4.88))//indexof(value) gives index of pass value in the array
console.log(arr.includes(4.88))//give boolen teue or values of result like this array incudes passed value or not
console.log(arr.includes(4))
const newArray=arr.join()//join() method joins the previous array to new array and data type of this new array would be in string always
console.log(arr)
console.log(newArray)
console.log(typeof(newArray))
