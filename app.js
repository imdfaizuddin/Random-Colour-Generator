function randomNum() {
    let r = Math.floor(Math.random() * (255) + 1);
    return r;
}



let box = document.querySelector(".colorBox");
let btn = document.querySelector(".container > button");
btn.onclick = function () {
    document.querySelector(".colorBox p").style.color = "white";
    let rgb1 = randomNum();
    let rgb2 = randomNum();
    let rgb3 = randomNum();
    box.style.backgroundColor = `rgb(${rgb1} , ${rgb2}, ${rgb3})`;
    document.querySelector("h1").innerText = `rgb(${rgb1} , ${rgb2}, ${rgb3})`;
}
