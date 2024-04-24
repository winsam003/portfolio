"use strict"

function fa_google(){
    window.open('winsam003@gmail.com');
}
function github(){
    window.open('https://github.com/winsam003');
}
function blogger(){
    window.open('https://velog.io/@winsam003/posts');
}

function MVC_model(){
    window.open('https://github.com/simsim916/coinJung_CookieRun');
}

function header_portfolio() {
    var element = document.getElementById("sec01");
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}
function header_About() {
    var element = document.getElementById("sec02");
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}
function header_Project() {
    var element = document.getElementById("sec03");
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}
function header_Update() {
    var element = document.getElementById("sec04");
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}
function header_Baord() {
    var element = document.getElementById("sec05");
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

window.onload = function () {
    firebase.storage().ref('desk-593327_1920.jpg').getDownloadURL()
        .then((url) => {
            console.log('다운로드 URL:', url);
            // 이미지를 표시하는 등의 작업 수행
        })
        .catch((error) => {
            console.error('다운로드 URL을 가져오는 동안 오류가 발생했습니다:', error);
        });
};
