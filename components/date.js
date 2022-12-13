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

// let today = new Date();
// let dd = String(today.getDate()).padStart(2, '0');
// let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// let yyyy = today.getFullYear();

// today = dd + '/' + mm + '/' + yyyy;
// console.log(today);






