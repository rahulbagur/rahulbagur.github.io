document.addEventListener('DOMContentLoaded', () => {
    // Check if intro has already been played
    const introPlayed = localStorage.getItem('introPlayed');
    const body = document.body;
    const introOverlay = document.getElementById('intro-overlay');

    if (!introPlayed && introOverlay) {
        // Run Animation
        setTimeout(() => {
            body.classList.add('intro-active');
        }, 100);

        // Sequence timing
        // 0.2s (Rahul) + 0.5s (Mahendra) + 0.8s (Bagur) + 0.8s (Reveal duration) + 0.8s (Hold) = ~3.1s
        // Let's invert background at around 2.5s
        
        setTimeout(() => {
            // Phase 2: Inversion
            body.classList.remove('loading');
            
            // Move/Scale Name (Handled via CSS transitions on body and hiding overlay text if needed, 
            // but for simplicity we are revealing main content which has the logo)
            
        }, 2500);

        setTimeout(() => {
            // Phase 3: Reveal Main Content
            body.classList.add('intro-complete');
            localStorage.setItem('introPlayed', 'true');
        }, 3300); // Allow inversion transition to complete
    } else {
        // Skip Intro
        body.classList.remove('loading');
        body.classList.add('intro-complete');
        if(introOverlay) introOverlay.style.display = 'none';
    }

    // Spotlight Effect
    const spotlight = document.getElementById("spotlight");
    if (spotlight) {
        document.addEventListener("mousemove", e => {
            spotlight.style.left = e.clientX + "px";
            spotlight.style.top = e.clientY + "px";
        });
    }

    // Dynamic Card Glow Border
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty("--x", x + "px");
            card.style.setProperty("--y", y + "px");
        });
    });

    // Magnetic Buttons/Links
    document.querySelectorAll(".magnetic").forEach(btn => {
        btn.addEventListener("mousemove", e => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "translate(0,0)";
        });
    });

    // Secret shortcut to Staging Page (Shift + S)
    document.addEventListener('keydown', (e) => {
        if (e.shiftKey && e.key === 'S') {
            window.location.href = 'staging.html';
        }
    });

    // Staging Page Logic
    if (window.location.pathname.includes('staging.html')) {
        const lockScreen = document.getElementById('lock-screen');
        const passInput = document.getElementById('passphrase');
        
        if (passInput) {
            passInput.addEventListener('input', (e) => {
                if (e.target.value.toLowerCase() === 'admin') {
                    if (lockScreen) lockScreen.style.display = 'none';
                    localStorage.setItem('lab_access', 'true');
                }
            });
        }

        if (localStorage.getItem('lab_access') === 'true' && lockScreen) {
            lockScreen.style.display = 'none';
        }
    }
});