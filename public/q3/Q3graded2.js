const form = document.getElementById("submission"); //get form

let savedInfo = localStorage.getItem("signUps"); //access saved info
let submittedInfo;

if (savedInfo) 
    submittedInfo = JSON.parse(savedInfo); // process saved info into a working array

else 
    submittedInfo = [];

form.addEventListener("submit", function(e){
    e.preventDefault();

    if(confirm("Would you like to save your response?")) {
        //declare all answers needed as variables
        const studentId = document.getElementById("studentid").value;
        const name = document.getElementById("fullName").value;
        const birthday = document.getElementById("bday").value;
        const emailAdd = document.getElementById("emailAddress").value;
        const phoneNo = document.getElementById("phoneNo").value;
        const grade = document.getElementById("gradeLevel").value;
        const club = document.getElementById("preferredClub").value;
        const reasons = document.getElementById("reasons").value;

        let classification = document.getElementsByName("livingArrangements");
        let livingArrangements;

        for (let i=0; i < classification.length; i++) {
            if(classification[i].checked) {
                livingArangements = classification[i].value;
            }
        }

        //assign object
        let studentInfo = {
            studentID: studentId,
            name: name,
            birthday: birthday,
            emailAddress: emailAdd,
            phoneNumber: phoneNo,
            gradeLevel: grade,
            classification: livingArrangements,
            club: club,
            reason: reasons
        };

        console.log(studentInfo); //checks if info was properly collected

        submittedInfo.push(studentInfo);

        localStorage.setItem("signUps", JSON.stringify(submittedInfo));

        console.log("Information saved to local storage");
    }
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