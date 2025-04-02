document.addEventListener('DOMContentLoaded', () => {
    // Create particles
    createParticles();
    
    // Retry button redirect
    const retryButton = document.querySelector('.retry-button');
    retryButton.addEventListener('click', () => {
        retryButton.classList.add('clicked');
        
        // Add glitch effect to the entire page
        const glitchOverlay = document.createElement('div');
        glitchOverlay.className = 'glitch-overlay';
        document.body.appendChild(glitchOverlay);
        
        // CSS for glitch overlay
        glitchOverlay.style.position = 'fixed';
        glitchOverlay.style.top = '0';
        glitchOverlay.style.left = '0';
        glitchOverlay.style.width = '100%';
        glitchOverlay.style.height = '100%';
        glitchOverlay.style.backgroundColor = 'rgba(65, 105, 225, 0.2)';
        glitchOverlay.style.zIndex = '9999';
        glitchOverlay.style.animation = 'glitch-background 0.5s ease';
        
        // Create keyframes for glitch animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes glitch-background {
                0% { transform: translate(0); }
                20% { transform: translate(-5px, 5px); }
                40% { transform: translate(-5px, -5px); }
                60% { transform: translate(5px, 5px); }
                80% { transform: translate(5px, -5px); }
                100% { transform: translate(0); }
            }
        `;
        document.head.appendChild(style);
        
        // Redirect after a brief delay
        setTimeout(() => {
            window.location.href = "https://vihaangayakwad.github.io/hapswad/";
        }, 800);
    });
});

function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('span');
        
        // Create and append SVG
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("width", "10");
        svg.setAttribute("height", "10");
        svg.setAttribute("viewBox", "0 0 10 10");
        
        const circle = document.createElementNS(svgNS, "circle");
        circle.setAttribute("cx", "5");
        circle.setAttribute("cy", "5");
        circle.setAttribute("r", "5");
        circle.setAttribute("fill", i % 2 === 0 ? "#4169E1" : "#00b4d8");
        
        svg.appendChild(circle);
        particle.appendChild(svg);
        
        // Set random properties for animation
        const size = Math.random() * 3 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        
        // Apply styles
        particle.style.position = 'absolute';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.top = `${posY}%`;
        particle.style.left = `${posX}%`;
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        
        particlesContainer.appendChild(particle);
    }
    
    // Add keyframes for floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0) rotate(0deg);
            }
            50% {
                transform: translateY(-20px) rotate(180deg);
            }
        }
    `;
    document.head.appendChild(style);
}