// الحصول على الأيقونة والشريط الجانبي

const menuIcon = document.getElementById('menuIcon');
const sidebar = document.getElementById('sidebar');
let startX = 0;
let currentX = 0;
let isDragging = false;
let isSidebarOpen = false; // حالة السايد بار (مفتوح أو مغلق)

// إضافة حدث للنقر على الأيقونة
menuIcon.addEventListener('click', function() {
    if (isSidebarOpen) {
        sidebar.style.right = '-100%'; // إخفاء الشريط الجانبي
        document.getElementById('exa').style.display="none"
        document.getElementById('icon').style.display="block"
        document.getElementById('body').style.overflow="auto"
        isSidebarOpen = false;
    } else {
        sidebar.style.right = '0'; // إظهار الشريط الجانبي
        sidebar.style.transition = 'right 0.3s ease';
        document.getElementById('exa').style.display="block"
        document.getElementById('icon').style.display="none"
        document.getElementById('body').style.overflow="hidden"
        isSidebarOpen = true;
    }
});





















// const words = ["Talaat Gamal", "Front-end Developer"];
// let currentWordIndex = 0;
// let typingSpeed = 30;  
// let erasingSpeed = 30; 
// let delayBetweenWords = 2000;

// const dynamicTextElement = document.getElementById("dynamic-text");
// // const cursorElement = document.getElementById("cursor");


// function typeWord() {

//   let word = words[currentWordIndex];
//   let charIndex = 0;

//   function type() {
//     if (charIndex < word.length) {
//       dynamicTextElement.textContent += word.charAt(charIndex);
//       charIndex++;
//       setTimeout(type, typingSpeed);
//     } else {
//       setTimeout(eraseWord, delayBetweenWords);
//     }
//   }

//   type();
// }

// function eraseWord() {
//   let word = words[currentWordIndex];
//   let charIndex = word.length;

//   function erase() {
//     if (charIndex > 0) {
//       dynamicTextElement.textContent = word.substring(0, charIndex - 1);
//       charIndex--;
//       setTimeout(erase, erasingSpeed);
//     } else {
//       currentWordIndex = (currentWordIndex + 1) % words.length; 
//       setTimeout(typeWord, typingSpeed);
//     }
//   }

//   erase();
// }

// document.addEventListener("DOMContentLoaded", function() {
//   setTimeout(typeWord, typingSpeed + 1000); 
// });
