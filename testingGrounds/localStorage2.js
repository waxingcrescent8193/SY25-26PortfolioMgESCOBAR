//get everythingggg
const form = document.getElementById("studentInfo");
const KEY = 'studentSignUp'

//create obj and arr to store everything
let savedInfo = localStorage.getItem(KEY);

if(savedInfo){
    submittedInfo = JSON.parse(savedInfo);
}

else {
    submittedInfo = [];
}

document.addEventListener("DOMContentLoaded", () => {
    form.addEventListener ("submit", function(e) {
        e.preventDefault();
        
        console.log("submitted!!")

        if(confirm("Save your note?")) {
            const username = document.getElementById("username").value; 
            const section = document.getElementById("section").value; 
            const number = document.getElementById("cn").value; 

            let submission = {
                username: username,
                section: section,
                number: number
            };

            console.log(submission);

            submittedInfo.push(submission);

            localStorage.setItem(KEY, JSON.stringify(submittedInfo));

            console.log("Submission saved in storage");
        }
    })
})

function outputSavedCharacters() {
    let outputSpace = document.getElementById("output");
    outputSpace.innerHTML = "";
    let outputString = "";

    for (let i=0; i < submittedInfo.length; i++) {
        for (let key in submittedInfo[i]) {
            outputString += `${key}: ${submittedInfo[i][key]} <br>`
        }
    }

    outputSpace.innerHTML = outputString;
}