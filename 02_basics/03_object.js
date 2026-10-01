const tinderUser={}
tinderUser.name="Diksha"
tinderUser.id=88
tinderUser.isLoggedIn=false
console.log(tinderUser)

const regularUser={
    email:"regular@gmail.com",
    fullname:{
        userFullName:{
        first_name:"Anuradha",
        last_name:"sharma"
        }
        
    }
}
//we can access object within the object with dot operator 
console.log(regularUser.fullname.userFullName.first_name)

const obj1={a:1,b:2}
const obj2={c:3,d:4}
const obj3={e:5,f:6}
/*we can murge objects with assign operator which murges all source_object's values within the first object or we can say within empty curly brases as written systax is 
Object.assign({},obj1,obj2,obj3...,objN)*/
const finalObject=Object.assign({},obj1,obj2,obj3)
//like array we can spread all objects as well with spread method 
const spreadObj={...obj1,...obj2,...obj3}
console.log(finalObject)
console.log(spreadObj)
//Object.keys(ObjectName) gives all keys of the object properties
console.log(Object.keys(tinderUser))
//Object.Values(ObejCtName) gives array of all values of passed object
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('id'))
//ObjectName.hasOwnProperty("PropertyName") gives true/falues of check result like it this object having this property init or not