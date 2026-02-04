// Add some interactivity and animations
document.addEventListener('DOMContentLoaded', function() {
    // Smooth page transitions
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Optional: Add a click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });

    // Random heart placement
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        heart.style.top = Math.random() * 100 + '%';
    });

    // Add a subtle glow effect to boxes on hover
    const boxes = document.querySelectorAll('.message-box, .apology-box, .future-box, .reasons-box, .final-message');
    boxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Console message (fun easter egg)
    console.log('%cMade with 💕 for someone special', 'font-size: 20px; color: #ff69b4; font-weight: bold;');
});

// Optional: Add confetti on certain pages
function createConfetti() {
    const confettiPieces = [];
    for (let i = 0; i < 50; i++) {
        const piece = document.createElement('div');
        piece.style.position = 'fixed';
        piece.style.width = '10px';
        piece.style.height = '10px';
        piece.style.backgroundColor = ['#ff69b4', '#ff1493', '#da70d6', '#ffc0cb'][Math.floor(Math.random() * 4)];
        piece.style.left = Math.random() * 100 + '%';
        piece.style.top = '-10px';
        piece.style.borderRadius = '50%';
        piece.style.pointerEvents = 'none';
        piece.style.zIndex = '5';
        
        document.body.appendChild(piece);
        
        const duration = 2 + Math.random() * 1;
        const xMovement = (Math.random() - 0.5) * 200;
        
        let top = -10;
        let opacity = 1;
        const startTime = Date.now();
        
        const animate = () => {
            const elapsed = (Date.now() - startTime) / 1000;
            const progress = elapsed / duration;
            
            if (progress >= 1) {
                piece.remove();
                return;
            }
            
            top = -10 + window.innerHeight * 1.1 * progress;
            opacity = 1 - progress;
            
            piece.style.top = top + 'px';
            piece.style.left = (parseFloat(piece.style.left) + xMovement / (duration * 60)) + '%';
            piece.style.opacity = opacity;
            
            requestAnimationFrame(animate);
        };
        
        animate();
    }
}
