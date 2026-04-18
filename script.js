const bgMusic = document.getElementById('bgMusic');

// Start music on the first touch anywhere
window.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
    }
}, { once: true });

function showPage(pageId) {
    // Switch screens
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');

    // Create a burst of hearts
    for(let i = 0; i < 6; i++) {
        createHeart();
    }
}

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

// Sparkle effect on every tap
document.addEventListener('click', (e) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'heart';
    sparkle.innerHTML = '✨';
    sparkle.style.left = e.clientX + 'px';
    sparkle.style.top = e.clientY + 'px';
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
});
