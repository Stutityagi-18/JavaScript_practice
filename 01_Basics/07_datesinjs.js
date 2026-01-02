//Dates

let myDate=new Date();
console.log(myDate.toString());//Fri Jan 02 2026 21:26:33 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());//Fri Jan 02 2026
console.log(myDate.toISOString());//2026-01-02T15:58:30.580Z
console.log(myDate.toJSON());//2026-01-02T15:58:30.580Z
console.log(myDate.toLocaleDateString());//2/1/2026
console.log(myDate.toLocaleString());//2/1/2026, 9:28:30 pm
console.log(myDate.toTimeString());//21:26:33 GMT+0530 (India Standard Time)
console.log(typeof myDate);//object

let mycreatedDate=new Date(2026,0,23)//months start from 0 to 11 in js
console.log(mycreatedDate.toLocaleDateString());//23/1/2026
let datewdtime=new Date(2026,0,2,9,12);
console.log(datewdtime.toLocaleString());//2/1/2026, 9:12:00 am

let myTimeStamp=Date.now();
console.log(myTimeStamp);//it gives time in milliseconds from 1 jan 1970 to current date

console.log(myDate.getTime());//it gives time in milliseconds from 1 jan 1970 to current date

console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
console.log(newDate.getFullYear());

console.log(newDate.getMonth()+1);
console.log(newDate.getDay());//0 for sunday,1 for monday and so on

newDate.toLocaleString('default',
    {
        weekday: "long",
    }
)