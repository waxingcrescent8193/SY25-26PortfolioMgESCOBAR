//localStorage.getItem (access storage)
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberMeCheckbox = document.getElementById('rememberMe');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission (for demo)
 
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
 
    // Save data to Local Storage if "Remember me" is checked
    if (rememberMeCheckbox.checked) {
        localStorage.setItem('savedUsername', username);
        localStorage.setItem('savedPassword', password); // Note: Storing passwords is risky!
        console.log('Login data saved to Local Storage');
    } else {
        // Optional: Clear storage if checkbox is unchecked
        localStorage.removeItem('savedUsername');
        localStorage.removeItem('savedPassword');
        console.log('Login data removed from Local Storage');
    }
 
    // In a real app, you would send data to a server here
    console.log('Submitted:', { username, password });
});

// Run when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve saved data from Local Storage
    const savedUsername = localStorage.getItem('savedUsername');
    const savedPassword = localStorage.getItem('savedPassword');
 
    // Pre-fill form if data exists
    if (savedUsername) {
        usernameInput.value = savedUsername;
        rememberMeCheckbox.checked = true; // Check the box if data is saved
    }
 
    if (savedPassword) {
        passwordInput.value = savedPassword; // Again: Risky for real apps!
    }
});