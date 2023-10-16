document.addEventListener('DOMContentLoaded', function() {
    function handleFormSubmit(event) {
        event.preventDefault();

        var username = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        const emailregx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/

        if(!username || !email) {
            alert('Please fill in all required fields');
        } else {
            alert('Form submitted successfully!');
        }
        if(!emailregx.test(email)) {
            alert('invalid Format');
        }
    }

    var form = document.getElementById('submitForm');
    form.addEventListener('submit', handleFormSubmit);
});