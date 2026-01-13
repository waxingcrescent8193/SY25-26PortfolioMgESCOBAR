let tutorForm = document.getElementById("tutorApplicationForm");
let studentForm = document.getElementById("studentApplicationForm");


function tutorApplication() {  
    if (studentForm.style.display === "block")
        studentForm.style.display = "none";

    if (tutorForm.style.display === "block") 
        tutorForm.style.display = "none"; 

    else 
        tutorForm.style.display = "block";
}

function studentApplication () {
    if (tutorForm.style.display === "block")
        tutorForm.style.display = "none";

    if (studentForm.style.display === "block") 
        studentForm.style.display = "none"; 

    else 
        studentForm.style.display = "block";
}

function submittedTutorApplication() {

}

function submittedStudentApplication () {

}