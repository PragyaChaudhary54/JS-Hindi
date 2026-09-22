const date=new Date()
console.log(date)
console.log(date.toString())
console.log(date.toLocaleString())
console.log(date.getTime())
console.log(date.getDay())
console.log(typeof(date))
let Owndate=new Date(2028,3,9)
console.log(Owndate.toString())//via this method we can convert the date into string or different formats as well toLocalString() and many more
console.log(Owndate.toLocaleString ())

/*We have define a object of Date class and that is assigned into TodayDate object name, now we can access its date, day, year, month , time of this date via objectName.Day()-->starts from 0 as sunday, objectName.Date(),objectName.FullYear() like methods*/
const TodayDate=new Date()
console.log(TodayDate.getDay())
console.log(TodayDate.getFullYear())
console.log(TodayDate.getMonth())
console.log(TodayDate.getDate())