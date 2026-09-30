const obj={
    name :"Pragya",
    email : "pragya123@gmail.com",
    emp_id : 88,
    phone: 730727782,
    address: "Arya Nagar Haridwar"   
}
//access object property via dot operator and ["property key name"], square braket having property name within double codes 
console.log(obj["address"])
console.log(obj["phone"])
console.log(obj.address)
//once we define the object property name , we can edit them also by object.propertyName=new value
obj.email="pragyachaudhary123@gmail.com"
console.log(obj["email"])
//we can freeze objects as well once it done then no property can changed 
Object.freeze(obj)
obj.email="newpragya@gmail.com"

console.log(obj["email"])

