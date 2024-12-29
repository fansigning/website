const heartsContainer = document.querySelector('.hearts');
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw'; // random width
        heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // random duration
        heart.textContent = '♥';
        heartsContainer.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 5000); 
    }
    setInterval(createHeart, 300);
