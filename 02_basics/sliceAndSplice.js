const arr1=[2,8,6,1,10,4]
const arr2=[100,85,99,34,90,20]
console.log(arr1)
//slice function gives value from_index, till_index from the pass array exluding the till index and the original value would not be modifies 
console.log("A " , arr1.slice(1,3))
console.log(arr2)
//splice function gives value from_index, till_index from the pass array including the till index also and modified the pass array in such a way like these many index values would be remove from the original value
console.log("B ", arr2.splice(1,3))
console.log(arr2)