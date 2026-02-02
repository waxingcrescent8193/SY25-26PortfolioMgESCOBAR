const form = document.getElementById("submission");

let submittedInfo = localStorage.getItem("userInfo");
let details;

if (submittedInfo) {
    details = JSON.parse(signups);
}

else {
    details = {};
}

form.addEventListener("submit", function(e){
    e.preventDefault();

    if(confirm("Would you like to save your response?")) {
        const accountDetails = new FormData(form);
        const studentDetails = Object.fromEntries(accountDetails.entries());

        details[studentDetails.fullName] = {};

        for (let key in studentDetails) {
            if (key != "fullName")
                details[studentDetails.fullName][key] = studentDetails[key];
        }
    }

    console.log(studentDetails);
    localStorage.setItem("userInfo", JSON.stringify(details));
    form.submit();
});

form.addEventListener("reset", function(e) {
    if(!confirm("Would you like to clear your response?")) {
        e.preventDefault(); 
    }
});

function focusedInput(element) {
    element.classList.add("focusedOn")
}

function missingInfo(response) {
    let responseContent = response.value;

    response.classList.remove("focusedOn");

    if (responseContent == "" || responseContent == " ") {
        alert("This field is required");
        response.classList.add("emptyContent")
    }

    else {
        response.classList.add("inputComplete")
    }
}