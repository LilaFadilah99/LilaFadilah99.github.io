const tanah = document.querySelectorAll(".tanah");
const tikus = document.querySelectorAll(".tikus");
const papanSkor = document.querySelector(".papan-skor");
const pop = document.querySelector("#pop");
let music = document.getElementById('audioMusic').volume = 0.2
let iframe = document.getElementById('audio').volume = 0.2

let tanahSebelumnya;
let selesai;
let skor;

function randomTanah(tanah) {
    const t = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[t];
    if (tRandom == tanahSebelumnya) {
        randomTanah(tanah);
    }
    tanahSebelumnya = tRandom;
    return tRandom;
}

function randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function munculkanTikus() {
    const tRandom = randomTanah(tanah);
    const wRandom = randomWaktu(310, 800);
    tRandom.classList.add("muncul");
    tambahEvent(); // Tambah eventListener penambah skor

    setTimeout(() => {
        tRandom.classList.remove("muncul");
        if (!selesai) {
            munculkanTikus();
        }
    }, wRandom);
}

function mulai() {
    selesai = false;
    skor = 0;
    papanSkor.textContent = 0;
    munculkanTikus();
    setTimeout(() => {
        selesai = true;
    }, 15000);
}

function pukul() {
    hapusEvent(); // Hapus eventListener penambah skor
    skor++;
    this.parentNode.classList.remove("muncul");
    pop.play();
    papanSkor.textContent = skor;
}

function tambahEvent() {
    tikus.forEach((t) => {
        t.addEventListener("click", pukul);
    });
}

function hapusEvent() {
    tikus.forEach((t) => {
        t.removeEventListener("click", pukul);
    });
}