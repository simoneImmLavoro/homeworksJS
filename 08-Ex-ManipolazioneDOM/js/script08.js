let theImg = document.querySelector("#myImg");
let randomize = document.querySelector("#randomize");

function Image(url, width, height) {
    this.url = url;
    this.width = width;
    this.height = height;
}

let myImages = [
    new Image("http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", "240", "160"),
    new Image("http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", "320", "195"),
    new Image("http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg", "500", "343"),
]

function setAttributeImg(imgTag, myImg) {
    imgTag.setAttribute("src", myImg.url);
    imgTag.setAttribute("height", myImg.height);
    imgTag.setAttribute("width", myImg.width);
}

let actualUrl = "";

function randomImage() {
    let myRandom;

    do {
        myRandom = Math.floor(Math.random() * myImages.length);
    } while (actualUrl === myImages[myRandom].url);

    let newImg = document.createElement("img");
    setAttributeImg(newImg, myImages[myRandom]);

    theImg.innerHTML = '';
    theImg.appendChild(newImg);
    actualUrl = myImages[myRandom].url;
}

randomize.addEventListener("click", function () {
    randomImage();
});

randomImage();
