const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-Link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});


// Get references to the login button and dropdown menu
const loginButton = document.getElementById('login-button');
const loginDropdown = document.getElementById('login-dropdown');

// Toggle the visibility of the dropdown when the login button is clicked
loginButton.addEventListener('click', () => {
    if (loginDropdown.style.display === 'block') {
        loginDropdown.style.display = 'none';
    } else {
        loginDropdown.style.display = 'block';
    }
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (!event.target.matches('#login-button')) {
        loginDropdown.style.display = 'none';
    }
});
