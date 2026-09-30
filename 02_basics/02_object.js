//object creation
const obj={
    product_name:"Table",
    quantity: 20
}
//defineing first method 
obj.price=function()
{
    console.log("in dollars")
}
//calling first method 
console.log(obj.price())

obj.priceTwo=function()
{
    console.log(`in dollars, ${this.product_name}`)
}
console.log(obj.priceTwo())