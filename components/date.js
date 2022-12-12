
/*let today = new Date();
let day = today.getDay();
let month = today.getMonth()+1;
const year = today.getFullYear();


if( day < 10) {
    day = "0" + day;
}

if (month < 10) {
    month = "0" + month;
}


today = day + '/' + month + '/' + year;

console.log(today);

const date = document.getElementById("date");
date.setAttribute("min", today);*/

// import date ?

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

if(day)
today = mm + '/' + dd + '/' + yyyy;
console.log(today);






