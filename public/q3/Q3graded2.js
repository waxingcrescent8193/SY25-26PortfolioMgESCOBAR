const form = document.getElementById("submission");

form.addEventListener("submit", submission());

function submission() {
    confirm("Would you like to save your response?");

}

form.addEventListener("reset", function(e) {
    if(!confirm("Would you like to clear your response?")) {
        e.preventDefault(); 
    }
});

function missingInfo(response) {
    let responseContent = response.value;

    if (responseContent == "" || responseContent == " ") {
        alert("This field is required");
        response.classList.add("emptyContent")
    }

    else {
        response.classList.add("inputComplete")
    }
}