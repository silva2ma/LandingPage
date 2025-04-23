const textElement = document.getElementById("typing");
const texts = ["Bem-vindo!", "Explore nosso site.", "Aproveite a experiência!"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;  // Aumentado para tornar a digitação mais lenta
let deletingSpeed = 100; // Aumentado para apagar mais devagar

function typeEffect() {
    let currentText = texts[index];

    if (isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex--);
    } else {
        textElement.textContent = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000); // Mantém o texto visível por mais tempo antes de apagar
        return;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length; // Muda para a próxima frase
    }

    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

typeEffect();
