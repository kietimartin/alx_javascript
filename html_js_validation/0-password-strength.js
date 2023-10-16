/*This script retrieves the value entered in the password input filed.
It checks if the password is;
    *At least 8 characters long.
    *At least one uppercase.
    *At least one lowercase.
    *At least one numeric digit
    *At least one special character
*/

function validatePassword(password) {
    const minLength = 8;
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    const digit = /\d/;
    const specialCharacter = /[!@#$%^&*]/;

    if (
        password.length >= minLength &&
        uppercase.test(password) &&
        lowercase.test(password) &&
        digit.test(password) &&
        specialCharacter.test(password)
    ) {
        return true;
    } else {
        return false;
    }
}
// Prevent form submission
const form = document.querySelector('form');
document.getElementById('Submitbtn').addEventListener('click', function(event) {
    event.preventDefault(); 

    const password = document.getElementById('password').value;
    const Error = document.getElementById('error');

    if (validatePassword(password)) {
        Error.textContent = ''; 
        this.submit();
    } else {
        Error.textContent = 'error';
    }
});
