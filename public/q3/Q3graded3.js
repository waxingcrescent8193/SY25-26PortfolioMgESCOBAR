//Gathering Info

let signups = localStorage.getItem("userInfo");
let userInfo;

if (signups) {
    userInfo = JSON.parse(signups);
}

else {
    userInfo = [];
}

document.getElementById() = localStorage.getItem()
const outputTable = document.getElementById("output");

if (userInfo.length > 0) {
    outputTable.innerHTML = '<p> There is nothing here </p>';
}