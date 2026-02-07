//assign variable for local storage info
let storedInfo = localStorage.getItem("signUps");
let savedInfo;

//Local Storage Initial Check
if (storedInfo)
    savedInfo = JSON.parse(storedInfo);

else
    savedInfo = [];

//if statement for dropdown

function generateOutput() {
    //assign needed variables
    let choice = document.getElementById("clubPicked").value; //value of selection
    let output = document.getElementById("signUpsList"); //html output
    let signUpCount = 0; //tracks no. of sign ups
    let signup = document.getElementById("signUpOutput");
    
    let outputString = "<tr><th> Club </th> <th> ID </th> <th> Full Name </th> <th> Grade </th> <th>Email</th> <th> Mobile </th> <th> Intern | Extern </th></tr>";
    
    output.innerHTML = "";


    //process dropdown logic
    if(choice == "allListed") {
        signUpCount = savedInfo.length;

        if(savedInfo.length === 0)
            outputString += "<tr><td colspan='7'> No signups found </td></tr>"

        else {
            for(let i = 0; i < savedInfo.length; i++) {
                let obj = savedInfo[i]; //assigns indiiviual object, which is an array element

                outputString += "<tr>"
                outputString += "<td>" + obj.club + "</td>";
                outputString += "<td>" + obj.studentID + "</td>";
                outputString += "<td>" + obj.name + "</td>";
                outputString += "<td>" + obj.gradeLevel + "</td>";
                outputString += "<td>" + obj.emailAddress + "</td>";
                outputString += "<td>" + obj.phoneNumber + "</td>";
                outputString += "<td>" + obj.classification + "</td>";
                outputString += "</tr>"
            }
        }
    }

    else if(choice == "default") {
        outputString = "";
    }

    else {
        let arr = []; //array for new output

        for(let j = 0; j < savedInfo.length; j++) {
            let obj = savedInfo[j];

            if(obj.club == choice) //checks if the signup club is the club selected
                arr.push(savedInfo[j]);
        }

        signUpCount = arr.length;

        if(arr.length === 0) 
            outputString += "<tr><td colspan='7'> No signpups for this club </td></tr>"

        else {
            for(let k=0; k < arr.length; k++) {
                let signup = arr[k];

                outputString += "<tr>"
                outputString += "<td>" + signup.club + "</td>";
                outputString += "<td>" + signup.studentID + "</td>";
                outputString += "<td>" + signup.name + "</td>";
                outputString += "<td>" + signup.gradeLevel + "</td>";
                outputString += "<td>" + signup.emailAddress + "</td>";
                outputString += "<td>" + signup.phoneNumber + "</td>";
                outputString += "<td>" + signup.classification + "</td>";
                outputString += "</tr>"
            }
        }
    }
    
    //dropdown output
    signup.innerHTML = `${signUpCount}`
    output.innerHTML = `${outputString}`
}

//dropdown output