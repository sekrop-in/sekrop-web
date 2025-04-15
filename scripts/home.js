// Home page specific functionality
const texts = [
    { text: 'kavach', font: "'Space Grotesk', sans-serif" },
    { text: 'कवच', font: "'Noto Sans Devanagari', sans-serif" },
    { text: 'ਕਵਚ', font: "'Noto Sans Gurmukhi', sans-serif" }
];

const typingText = document.querySelector('.typing-text');
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 150;
let pauseTime = 2000;

function type() {
    const current = texts[currentTextIndex];
    typingText.style.fontFamily = current.font;

    if (!isDeleting) {
        typingText.textContent = current.text.substring(0, currentCharIndex + 1);
        currentCharIndex++;

        if (currentCharIndex === current.text.length) {
            isDeleting = true;
            typingSpeed = 100;
            setTimeout(type, pauseTime);
            return;
        }
    } else {
        typingText.textContent = current.text.substring(0, currentCharIndex - 1);
        currentCharIndex--;

        if (currentCharIndex === 0) {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            typingSpeed = 150;
            setTimeout(type, 500);
            return;
        }
    }

    setTimeout(type, typingSpeed);
}

// Start typing animation after a delay
setTimeout(type, 1000); 