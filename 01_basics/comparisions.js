console.log(2>0)
console.log(7!=7)
console.log(9<12)
console.log(15==15)
console.log(19!=27)

/*---Comparision operator can also convert the data type and do the comparision ---*/
console.log("2">0)//string converted to number and then compare its values
console.log(5<"20")

/*---comparision with null not recommended as it shows inconsistant values sometimes true sometimes false*/
console.log(null>0)
console.log(null<0)
console.log(null>=0)
/*
---comparision with undefined not recommeneded as it shows inconsestant value sometimes true sometimes false*/
console.log(undefined>0)
console.log(undefined==0)
console.log(undefined<0)
/*------Strict Comparision operator----
=== this operator strictly compare the value plus its data type also*/
console.log("2"===2)


