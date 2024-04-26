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
function header_Skills() {
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

// Firebase 프로젝트의 구성 정보
// const firebaseConfig = {
//     apiKey: "AIzaSyClgtXm1tcwibw7Fm7B_Yk0YeYNiUqioLc",
//     authDomain: "sam-s-portfolio-48477.firebaseapp.com",
//     databaseURL: "https://sam-s-portfolio-48477-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "sam-s-portfolio-48477",
//     storageBucket: "sam-s-portfolio-48477.appspot.com",
//     messagingSenderId: "412846213805",
//     appId: "1:412846213805:web:1dbfccc7b4d0a0afed1424",
//     measurementId: "G-WG3YKPQ4L2"
// };

// // Firebase 초기화
// firebase.initializeApp(firebaseConfig);

// // Firebase Storage 참조
// const storage = firebase.storage();

// // 파일 다운로드 함수
// function downloadFile() {
//     // 파일 경로
//     const filePath = '승승장구 2차발표.pdf'; // 실제 파일 경로로 변경

//     // 파일 참조 가져오기
//     const fileRef = storage.ref().child(filePath);
//     console.log(fileRef)

//     // 파일 다운로드 URL 가져오기
//     fileRef.getDownloadURL()
//         .then((url) => {
//             // 파일 다운로드
//             const xhr = new XMLHttpRequest();
//             xhr.responseType = 'blob'; // Blob 형식으로 데이터를 받음
//             xhr.onload = (event) => {
//                 const blob = xhr.response;
//                 const a = document.createElement('a');
//                 const url = window.URL.createObjectURL(blob);
//                 a.href = url;
//                 a.download = '승승장구 2차발표.pdf'; // 다운로드되는 파일 이름
//                 a.click();
//                 window.URL.revokeObjectURL(url);
//             };
//             xhr.open('GET', url);
//             xhr.send();
//         })
//         .catch((error) => {
//             console.error('파일을 다운로드하는 중 오류가 발생했습니다:', error);
//         });
// }


// window.addEventListener('scroll', function () {
//     var scrollContent = document.getElementsByClassName('header_portfolio')[0];
//     if (window.scrollY > 200) { // Adjust 200 to your desired scroll position
//         scrollContent.style.opacity = '.5';
//     } else {
//         scrollContent.style.opacity = '1'; // Or whatever the default display should be
//     }
// });
