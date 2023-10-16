// select form fields;
var Form = document.querySelector('#emailForm');

var Error = document.getElementById('error');

function validateEmail() {
    const emailreg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
    var input = document.getElementById('email').value;
    if(input.length == 0) {
        Error.innerHTML = 'Please enter a valid email address.';
        return false;
    }
    if(!input.match(emailreg)) {
        Error.innerHTML = 'Please enter a valid email address.'
        return false;
    }
    Error.innerHTML = 'success.';
    return true;
}