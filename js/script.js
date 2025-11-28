function reveal() {
  const elements = document.querySelectorAll(".reveal");

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();

    // Когда элемент попадает в область видимости — включаем анимацию
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);

// Запуск при загрузке страницы
reveal();

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
function revealOnScroll() {
    const elements = document.querySelectorAll('.scroll-reveal');

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100){
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);
function revealOnScroll() {
    const elements = document.querySelectorAll('.scroll-reveal');

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100){
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);
