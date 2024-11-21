function gotoSobreNos() {
    window.location.href = "sobreNos.html";
};

document.getElementById("higiene").addEventListener("click", () => {
    window.location.href = "higiene.html";
});

document.getElementById("alimentacao").addEventListener("click", () => {
    window.location.href = "alimentacao.html";
});

document.getElementById("atividadeFisica").addEventListener("click", () => {
    window.location.href = "atividadeFisica.html";
});

document.getElementById("saudeBemEstar").addEventListener("click", () => {
    window.location.href = "saudeBemEstar.html";
});

document.getElementById("influenciaMusical").addEventListener("click", () => {
    window.location.href = "influenciaMusical.html";
});

function gotoCanalDenuncia() {
    window.location.href = "canalDenuncia.html";
}

/*Menu overlay - código*/
const menuOverlayBtn = document.getElementById('menuOverlayBtn');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

menuOverlayBtn.addEventListener('click', () => {
    overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
    document.querySelector('main').style.filter = 'blur(10px)';
});

function closeOverlay() {
    overlay.classList.remove('active');
    menu.classList.remove('active');
    document.querySelector('main').style.filter = 'none';
}

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closeOverlay();
    }
});

/*Enviar fotos - galeria pet*/
function enviarEmail() {
    var email = "galeriapatasdog@gmail.com";
    var subject = "Quero enviar a foto do meu pet!";
    
    var gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=" + email + "&su=" + encodeURIComponent(subject);

    window.open(gmailLink, '_blank');
}