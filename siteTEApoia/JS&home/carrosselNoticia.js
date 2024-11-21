let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const bolinhas = document.querySelectorAll('.bolinha');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        bolinhas[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            bolinhas[i].classList.add('active');
        }
    });
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

bolinhas.forEach((bolinha, i) => {
    bolinha.addEventListener('click', () => {
        showSlide(i);
    });
});

// Iniciar carrossel com o primeiro slide visível
showSlide(currentSlide);

// Alternar slides automaticamente a cada 5 segundos
setInterval(nextSlide, 5000);

function gotoSobreNoticia() {
    // Implementar a lógica para ir para a página sobre a notícia
    alert('Redirecionando para mais informações sobre a notícia...');
}








