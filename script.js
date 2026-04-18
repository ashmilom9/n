function showPage(pageId) {
    // Play music logic
    const music = document.getElementById('bgMusic');
    if (music.paused) {
        music.play().catch(() => {});
    }

    // Switch screens
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');

    // Create a burst of hearts for delight
    for(let i = 0; i < 8; i++) {
        createHeart();
    }
}

function updateName() {
    const name = document.getElementById('nameInput').value;
    document.querySelectorAll('.userName').forEach(span => {
        span.innerText = name ? `, ${name}` : "";
    });
}

// Interactive Heart Elements
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '🤍';
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.opacity = Math.random();
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// Also spawn a heart wherever she taps
document.addEventListener('click', (e) => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '✨';
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
});