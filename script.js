window.addEventListener("DOMContentLoaded", main);

function main() {
    loadStartScene();
}

function loadStartScene() {
    const startBtn = document.getElementById("startBtn")

    startBtn.onclick = mainPage;
}

const showClockImageButton = document.getElementById("show-clock-image");
const myClock = document.getElementById("my-clock");

showClockImageButton.addEventListener("click", () => {
    myClock.hidden = !myClock.hidden;
});

const showBackpackImageButton = document.getElementById("show-backpack-image");
const myBackpack = document.getElementById("my-backpack");

showBackpackImageButton.addEventListener("click", () => {
    myBackpack.hidden = !myBackpack.hidden;
});

const showToolboxImageButton = document.getElementById("show-toolbox-image");
const myToolbox = document.getElementById("my-toolbox");

showToolboxImageButton.addEventListener("click", () => {
    myToolbox.hidden = !myToolbox.hidden;
});

const showDrawerImageButton = document.getElementById("show-drawer-image");
const myDrawer = document.getElementById("my-drawer");

showDrawerImageButton.addEventListener("click", () => {
    myDrawer.hidden = !myDrawer.hidden;
});

const showOutdoorImageButton = document.getElementById("show-outdoor-image");
const outdoorImage = document.getElementById("outdoor-image");

showOutdoorImageButton.addEventListener("click", () => {
    outdoorImage.hidden = !outdoorImage.hidden;
});

const showKeyImageButton = document.getElementById("show-key-image");
const doorKey = document.getElementById("door-key");

showKeyImageButton.addEventListener("click", () => {
    doorKey.hidden = !doorKey.hidden;
})




var slider_img = document.querySelector('.slider-img');
var images = ['DAILY-ROOM-ESCAPE-INTER.png', 'dailyRoom.jpg'];
var i = 0; // Current Image Index

function prev() {
    i = (i <= 0) ? images.length - 1 : i - 1; // Wraparound
    setImg();
}

function next() {
    i = (i >= images.length - 1) ? 0 : i + 1; // Wraparound
    setImg();
}

function setImg() {
    if (slider_img) {
        slider_img.setAttribute('src', 'images/' + images[i]);
    } else {
        console.error("Slider image element not found!");
    }
}