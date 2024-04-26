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


window.addEventListener('scroll', function () {
    var scrollContent = document.getElementsByTagName('header')[0];
    if (window.scrollY > 200) { // Adjust 200 to your desired scroll position
        scrollContent.style.opacity = '0'; // 요소의 투명도를 0으로 설정하여 천천히 사라지도록 합니다.
        scrollContent.style.pointerEvents = 'none'; // 요소의 클릭 이벤트를 비활성화하여 사용자가 클릭할 수 없도록 합니다.
    } else {
        scrollContent.style.opacity = '1'; // 요소의 투명도를 0으로 설정하여 천천히 사라지도록 합니다.
        scrollContent.style.pointerEvents = 'auto'; // 요소의 클릭 이벤트를 비활성화하여 사용자가 클릭할 수 없도록 합니다.
    }
});


window.addEventListener('scroll', function () {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // 페이지 상단으로 스크롤되면 화살표 나타내기
    if (window.scrollY > 100) { // 원하는 스크롤 위치로 조정
        scrollToTopBtn.classList.add('visible'); // visible 클래스 추가
    } else {
        scrollToTopBtn.classList.remove('visible'); // visible 클래스 제거
    }
});

window.addEventListener('DOMContentLoaded', function () {
    // 화살표 클릭 시 페이지 상단으로 부드럽게 스크롤
    document.getElementById('scrollToTopBtn').addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 부드러운 스크롤 효과
        });
    });
});