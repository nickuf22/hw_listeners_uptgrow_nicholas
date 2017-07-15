var image = document.getElementById('figure');

// Shows when the mouse hover over the figure
function myFunction() {
    document.getElementById('testing').innerHTML = 'Hover over<br>';
}

// Shows when the mouse moves from over the figure
function mySecondFunction() {
    document.getElementById('testing').innerHTML = 'Hover out<br>';
}

// Notifies users upon clicking the image
function myThirdFunction() {
    document.getElementById('testing').innerHTML = 'Image is not hyerlinked<br>';
}

image.addEventListener('mouseover', myFunction);
image.addEventListener('mouseleave', mySecondFunction);
image.addEventListener('click', myThirdFunction);
