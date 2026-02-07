document.addEventListener('DOMContentLoaded', () => {
    const introPlayed = localStorage.getItem('introPlayed');
    const body = document.body;
    const introWrapper = document.getElementById('intro-wrapper');

    if (!introPlayed && introWrapper) {
        // Phase 1: Reveal Names (White BG, Black Text)
        setTimeout(() => {
            body.classList.add('intro-active');
        }, 100);

        // Sequence:
        // 0.2s (Rahul) + 0.5s (Mahendra) + 0.8s (Bagur) + 0.8s (Reveal) + 0.8s (Hold) = ~3.1s
        
        // Phase 2: Inversion (White -> Black) & Move/Scale
        setTimeout(() => {
            // This triggers the CSS transitions on body (bg/color) and intro-wrapper (transform)
            body.classList.remove('loading');
            body.classList.add('intro-complete'); 
            
            // Mark as played immediately so reload skips
            localStorage.setItem('introPlayed', 'true');
        }, 2800); 

    } else {
        // Skip Intro: Immediately set final state
        body.classList.remove('loading');
        body.classList.add('intro-complete');
        // Disable transition for instant load
        body.style.transition = 'none';
        if(introWrapper) introWrapper.style.display = 'none';
        
        // Re-enable transitions after a tick
        setTimeout(() => {
            body.style.transition = '';
        }, 50);
    }

    // Standard Interactions
    const spotlight = document.getElementById("spotlight");
    if (spotlight) {
        document.addEventListener("mousemove", e => {
            spotlight.style.left = e.clientX + "px";
            spotlight.style.top = e.clientY + "px";
        });
    }

    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty("--x", x + "px");
            card.style.setProperty("--y", y + "px");
        });
    });

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

    document.addEventListener('keydown', (e) => {
        if (e.shiftKey && e.key === 'S') {
            window.location.href = 'staging.html';
        }
    });

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
