let p;
let deg = 0;
let urlImg = [];
let arrImg = [];

function batDauKeo() {
    p = event.target;
}

function choThaVao() {
    event.preventDefault();
}

function thaXong() {
    if (event.target.firstElementChild === null) {
        event.target.appendChild(p);
    }
}

function hieuUng() {
    deg += 90;
    document.getElementById(event.target.id).style.transform = `rotate(${deg}deg)`;
}

function upLoadFile() {
    arrImg = event.target.files;
    if (arrImg.length > 25) {
        alert("Bạn chỉ có thể tải lên tối đa 25 ảnh.");
        return;
    }
    for (let i = 0; i < arrImg.length; i++) {
        urlImg[i] = URL.createObjectURL(arrImg[i]);
        localStorage.setItem(`img${i}`, urlImg[i]);
        document.getElementById(`img${i + 1}`).src = urlImg[i];
    }
    alert(`Upload thành công ${arrImg.length} ảnh mẫu`);
}

window.onload = function () {
    for (let i = 0; i < 25; i++) {
        let imgSrc = localStorage.getItem(`img${i}`);
        if (imgSrc) {
            urlImg[i] = imgSrc;
            document.getElementById(`img${i + 1}`).src = imgSrc;
        } else {
            document.getElementById(`img${i + 1}`).src = "STONKS.jpg";
        }
    }
    document.getElementById("player").style.display = "block";
    document.getElementById("replayer").style.display = "none";
}

function play() {
    event.preventDefault();
    let mixArray = urlImg.sort(() => 0.5 - Math.random());
    for (let i = 0; i < urlImg.length; i++) {
        document.getElementById(`img${i + 1}`).src = mixArray[i];
        document.getElementById(`img${i + 1}`).style.transform = "rotate(90deg)";
    }
    document.getElementById("player").style.display = "none";
    document.getElementById("replayer").style.display = "block";
}

function playAgain() {
    event.preventDefault();
    for (let i = 0; i < 25; i++) {
        document.getElementById(`img${i + 1}`).src = localStorage.getItem(`img${i}`) || "./image1/img-26.png";
        document.getElementById(`img${i + 1}`).style.transform = "rotate(0deg)";
    }
    document.getElementById("player").style.display = "block";
    document.getElementById("replayer").style.display = "none";
}


