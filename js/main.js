var image = document.getElementById('figure');

function myFunction() {
    document.getElementById('testing').innerHTML += 'Hover over!<br>';
}

function mySecondFunction() {
    document.getElementById('testing').innerHTML += 'Hover out!<br>';
}

function myThirdFunction() {
    document.getElementById('testing').innerHTML += 'Image is not hyerlinked<br>';
}

image.addEventListener('mouseover', myFunction);
image.addEventListener('mouseleave', mySecondFunction);
image.addEventListener('click', myThirdFunction);
