






// Animation عند فتح الصفحة
document.addEventListener("DOMContentLoaded", () => {
  const welcomeElement = document.getElementById('logo');
  if (welcomeElement) {
    welcomeElement.classList.add("active");
  }
});

// Animation عند الـ Scroll للسيكشنز المحددة
document.addEventListener("DOMContentLoaded", () => {
  // هنا بنحدد الـ IDs المطلوبة
  const sections = document.querySelectorAll("#all-pr-812, #real-m");

  function checkScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        section.classList.add("active");
      }
    });
  }

  checkScroll();
  window.addEventListener("scroll", checkScroll);
});