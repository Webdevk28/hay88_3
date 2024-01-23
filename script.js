const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function () {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
});

// =============================================================

// date month year

const date = new Date();

let day = date.getDate();
let month = date.getMonth() +1;
let year = date.getFullYear();

document.querySelector(".day").innerHTML =  day + "/" + month + "/" + year;
document.querySelector(".day-1").innerHTML =  day-1 + "/" + month + "/" + year;
document.querySelector(".day-2").innerHTML =  day-2 + "/" + month + "/" + year;
document.querySelector(".day-3").innerHTML =  day-3 + "/" + month + "/" + year;
document.querySelector(".day-4").innerHTML =  day-4 + "/" + month + "/" + year;
document.querySelector(".day-5").innerHTML =  day-5 + "/" + month + "/" + year;
document.querySelector(".day-6").innerHTML =  day-6 + "/" + month + "/" + year;
document.querySelector(".day-7").innerHTML =  day-7 + "/" + month + "/" + year;

let currentDate = `${day}-${month}-${year}`;
console.log(currentDate); 


// =================================================================
// random telegram
function randomTlg() {
    var telegram = [
        'https://t.me/Nguyenminh132',
        'https://t.me/Dangngockhanhhh',
        'https://t.me/lylong1779',
        'https://t.me/ngoclinh0972',
        'https://t.me/daohuyen113',
        'https://t.me/emtrangnehihi',
        'https://t.me/suohu58',
        'https://t.me/thuytrang6656',
        'https://t.me/lenghinghi',
        'https://t.me/thattuyet_999',
        'https://t.me/thythy868',
        'https://t.me/baonamhay88',
        'https://t.me/huyvaobo',
        'https://t.me/thanhpham19971',
        'https://t.me/boosshoanganh',
        'https://t.me/huynhhy9',
        'https://t.me/mylovehtq',
        'https://t.me/betram1123',
        'https://t.me/zzmailyzz86'
    ];
    var i = parseInt(Math.random() * telegram.length);
    location.href = telegram[i];
}


//  random zalo
function randomZalo() {
    var zalo = [
        'https://zalo.me/g/wzlgcw201',
        'https://zalo.me/g/mtwifk462',
        'https://zalo.me/g/ojucae708'
    ]
    var i = parseInt(Math.random() * zalo.length);
    location.href = zalo[i];
}

