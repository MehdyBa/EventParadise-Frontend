let today = new Date();
let day = today.getDate();
let month = today.getMonth()+1;
const year = today.getFullYear();


if( day < 10) {
    day = "0" + day;
}

if (month < 10) {
    month = "0" + month;
}


today = year + '-' + month + '-' + day ;
console.log(today);


const date = document.getElementById("date");
date.setAttribute("min", today);





