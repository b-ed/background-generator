var h3 = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var randomize = document.querySelector('#randomize');

function randomColorValue() {
    var rgb = randomNumber();
    var hex = (rgb < 16) ? '0' + rgb.toString(16) : rgb.toString(16);
    return hex;
}

function randomizeColors() {
    color1.value = "#"+ randomColorValue() + randomColorValue()+randomColorValue();
    color2.value = "#"+ randomColorValue() + randomColorValue()+randomColorValue();
}

function setGradient() {
    body.style.background = 
        "linear-gradient(to right, "
        + color1.value 
        + ", "
        + color2.value
        + ")";

    h3.innerText = body.style.background
}

function randomGradient() {
    randomizeColors();
    setGradient();
}

randomGradient();

randomize.addEventListener('click', randomGradient)

color1.addEventListener('input', setGradient)

color2.addEventListener('input', setGradient)

