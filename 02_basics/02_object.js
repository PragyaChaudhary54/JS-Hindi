
const obj={
    product_name:"Table",
    quantity: 20
}

obj.price=function()
{
    console.log("in dollars")
}
console.log(obj.price())

obj.priceTwo=function()
{
    console.log(`in dollars, ${this.product_name}`)
}
console.log(obj.priceTwo())