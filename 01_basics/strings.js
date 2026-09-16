const string1="pragya"
const string2=" Chaudhary"
/*strings acan be concattinated/added with + operator */
console.log(string1+string2)
/*For writing text with variale we can use backticks ``(over tilde key of keyboard) and for varibles to be print will use ${variable_name}*/
console.log(`hello this is the first string ${string1}`+` amd this is the second string ${string2}`)

/*----String Menthods and Operations----*/
const aString=new String("AkshayMehta")//created a string object
console.log(aString[4])//return charcter at index4(started with 0)
console.log(aString.length)//returns length of the string
console.log(aString.toUpperCase())//convert to upparcase
console.log(aString.__proto__)//will terurn prototype of object
console.log(aString.charAt(4))//terurn character at index 4
console.log(aString.indexOf('h'))//will return index of first h in the string

const partOfString=aString.substring(0,5)
console.log(partOfString)//substring return the string(started index,upto index)

const sliceOfString=aString.slice(2,4)
console.log(sliceOfString)
/*slice method extract the string slice(from  index, upto index but not include itself)*/
const fromBackOfString=aString.slice(-8,6)/*-8 means from end it will go till 8th from end and 6 means index from frint excluding index value 6 */
console.log(fromBackOfString)

const trimValueOfString="  BeforeTrim  "
console.log(trimValueOfString)
console.log(trimValueOfString.trim())
/*trim method removes the extra spaces before and end of the string*/

const url="https://refactored-doodle-74vqvpjjvxqfp7pv.github%20dev/"
console.log(url.replace('%20','-'))
/*replace('Found_string','updated string ') */
console.log(url.includes('git'))
//includes gives boolean value whereter the stiring contains inside the given string
console.log(url.includes('pragya'))
console.log(url.split('-'))
/*split seperetes the given string from passed value like from - or / or comma*/