const num=100
const numClass=new Number(800)
console.log(num)
console.log(numClass)
/*--Converting number to string, and hance we can acess string class methods too--*/
console.log(numClass.toString().length)
console.log(typeof(numClass))//would be object 
console.log(numClass.toFixed(2))//toFixed(length) menthod used to create the number after decimal to what length
console.log(numClass.toFixed(1))

const numerical=828.899
console.log(numerical.toPrecision(4))//to generete precise value like a 4 digit number is there and we have to make it to length 3,4,5 or vise versa
console.log(numerical.toPrecision(3))

/*-----Maths-----*/
console.log(Math.abs(-4))//abstract value if given in negative so it will give us in positive only
console.log(Math.round(2.99))//round() will round off teh value
console.log(Math.max(2,9,3,20,33,7))//max(),min() will give max and min of given array
console.log(Math.min(2,9,3,20,33,7))
console.log(Math.ceil(2.9))//will give uppar value after round off
console.log(Math.floor(2.4))//will give lower value after round off
console.log(Math.random())//random method give a random values everytime it runs in between 0 to 1
const min=10
const max=20
console.log(Math.floor(Math.random()*((max-min+1)+min)))