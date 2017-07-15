document.getElementById('contactform').addEventListener('submit', function (evt) {
    evt.preventDefault();
    document.getElementById('firstName').addEventListener(myFunction);
    document.getElementById('lastName').addEventListener(mySecondFunction);
    document.getElementById('email_address').addEventListener(myThirdFunction);
    document.getElementById('comments').addEventListener(myFourthFunction);
});

function myFunction() {
    var paragraph = document.createElement('p');
    paragraph.innerHTML = 'The firstName is: ';
}

function mySecondFunction() {
    var paragraph = document.createElement('p');
    paragraph.innerHTML = 'The firstName is: ';
}

function myThirdFunction() {
    var paragraph = document.createElement('p');
    paragraph.innerHTML = 'The firstName is: ';
}

function myFourthFunction() {
    var paragraph = document.createElement('p');
    paragraph.innerHTML = 'The firstName is: ';
}
