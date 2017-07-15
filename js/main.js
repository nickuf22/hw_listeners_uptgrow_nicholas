var contactForm = document.getElementById('contactform');
var firstname = document.getElementById('firstname').value;
var lastname = document.getElementById('lastname').value;
var emailAddress = document.getElementById('email_address').value;
var message = document.getElementById('comments').value;

contactForm.addEventListener('submit', function () {
    event.preventDefault();
    document.getElementById('firstName');
    document.getElementById('lastName');
    document.getElementById('email_address');
    document.getElementById('comments');
    return false;
}, false,
console.log('The firstName is: ' + firstname),
console.log('The lastName is: ' + lastname),
console.log('The email is: ' + emailAddress),
console.log('The message is: ' + message));
