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

