let score1="88"
let score2="98hg"
let score3=null
let score4=undefined
let boolValue0=false
let boolValue1=true
let stringName="Pragya"
let bool1=1
let bool2=0
let boolEmpty=""
let boolString="pragya"

console.log(typeof(score1))
console.log(typeof score1)

let valueInNumber1=Number(score1)
//Number is a class that can convert the passed variable into Number
console.log(typeof(valueInNumber1));
//typeof() is a method that gives the type of the passed variable
console.log(valueInNumber1);


let valueInNumber2=Number(score2);
console.log(typeof(valueInNumber2));
console.log(valueInNumber2);

let valueInNumber3= Number(score3);
console.log(typeof(valueInNumber));
//typeOf() for null passed-->Undefine
console.log(valueInNumber3)
//print for null passed -->0*/

let valueInNumber4=Number(score4);
console.log(typeof(valueInNumber4));
console.log(valueInNumber4);
/*After Conversion undefine type will be convert to number 
value of undefine-->NaN(Not a Number)*/

let valueInNumber5=Number(boolValue0);
console.log(typeof(valueInNumber5));
console.log(valueInNumber5);

let vaueInNumber6=Number(boolValue1);
console.log(typeof(vaueInNumber6));
console.log(vaueInNumber6);

let valueIn_StringName=Number(stringName);
console.log(typeof(valueIn_StringName));
console.log(valueIn_StringName);
/*
--String Converstions--
"Number" like "88"--> 88
"Cobination of number and charcaters" like "227bsggs"-->NaN (Not a Number)
 */

let valueInBool1=Boolean(bool1);
console.log(typeof(valueInBool1));
console.log(valueInBool1);

let valueInBool2=Boolean(bool2);
console.log(typeof(valueInBool2));
console.log(valueInBool2);

let valueInboolEmpty=Boolean();
console.log(typeof(valueInboolEmpty));
console.log(valueInboolEmpty);

let valueInboolString=Boolean();
console.log(typeof(valueInboolString));
console.log(valueInboolString);

/*--Type conversion of Bollean
true-->1
false-->0
ValuePass within double codes=1
Empty within double codes=0
 */

