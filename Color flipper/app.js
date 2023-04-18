
const changeBackground = document.body;

const hexPage = document.getElementById("hex-page");
const rgbPage = document.getElementById("rgb-page");
const hslPage = document.getElementById("hsl-page");

const hexWrapper = document.getElementById("hex-wrapper");
const rgbWrapper = document.getElementById("rgb-wrapper");
const hslWrapper = document.getElementById("hsl-wrapper");

const hexColor = document.getElementById("hex-color");
const rgbColor = document.getElementById("rgb-color");
const hslColor = document.getElementById("hsl-color");
const defaultColor = ["#aadca9", "rgb(120, 191, 255)", "hsl(26, 100%, 86%)"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let randomNumberValue;
//* adding event listener and function to the color page links

// hex page
hexPage.addEventListener("click", function () {
    if (hexPage.style.textDecoration != "underline") {
        hexWrapper.style.display = "block";
        rgbWrapper.style.display = "none";
        hslWrapper.style.display = "none";
        hexPage.style.textDecoration = "underline";
        rgbPage.style.textDecoration = "none";
        hslPage.style.textDecoration = "none";
        // changes the background color
        changeBackground.style.backgroundColor = defaultColor[0];
    }
});

// rgb page
rgbPage.addEventListener("click", function () {
    if (rgbPage.style.textDecoration != "underline") {
        rgbWrapper.style.display = "block";
        hexWrapper.style.display = "none";
        hslWrapper.style.display = "none";
        rgbPage.style.textDecoration = "underline";
        hexPage.style.textDecoration = "none";
        hslPage.style.textDecoration = "none";
        // changes the background color
        changeBackground.style.backgroundColor = defaultColor[1];
    }
});

// hsl page
hslPage.addEventListener("click", function () {
    if (hslPage.style.textDecoration != "underline") {
        hslWrapper.style.display = "block";
        rgbWrapper.style.display = "none";
        hexWrapper.style.display = "none";
        hslPage.style.textDecoration = "underline";
        rgbPage.style.textDecoration = "none";
        hexPage.style.textDecoration = "none";
        // changes the background color
        changeBackground.style.backgroundColor = defaultColor[2];
    }
});

hexColor.addEventListener("click", function () {
    let hexColorValue = "#";
    for (let i = 0; i < 6; i++) {
        randomNumberValue = Math.floor(Math.random() * hex.length);
        hexColorValue += hex[randomNumberValue];
    }
    hexColor.innerHTML = hexColorValue;
    changeBackground.style.background = hexColorValue;
});

rgbColor.addEventListener("click", function () {
    let a = Math.floor((Math.random() * 256));
    let b = Math.floor((Math.random() * 256));
    let c = Math.floor((Math.random() * 256));

    rgbColor.innerHTML = `rgb(${a},${b},${c})`;
    changeBackground.style.background = `rgb(${a},${b},${c})`;
});

hslColor.addEventListener("click", function () {
    let a = Math.floor(Math.random() * 361);
    let b = Math.floor(Math.random() * 101);
    let c = Math.floor(Math.random() * 101);

    const hslColorValue = `hsl(${a}, ${b}%, ${c}%)`;
    hslColor.textContent = hslColorValue;
    changeBackground.style.background = hslColorValue;
});