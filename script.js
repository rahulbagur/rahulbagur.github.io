document.addEventListener('DOMContentLoaded', () => {
    // ---------------------------------------------------------
    // INTRO ANIMATION LOGIC
    // ---------------------------------------------------------
    const introPlayed = localStorage.getItem('introPlayed');
    const body = document.body;
    
    // Elements to control
    const introWrapper = document.getElementById('intro-wrapper');

    if (!introPlayed && introWrapper) {
        // --- PHASE 1: IDENTITY (White BG, Names Reveal) ---
        // Add class to trigger CSS animations on spans
        // Wait a tiny bit to ensure DOM is ready
        setTimeout(() => {
            body.classList.add('intro-active');
        }, 100);

        // Timeline:
        // 0.0s: Start
        // 0.2s: Rahul reveals
        // 0.5s: Mahendra reveals
        // 0.8s: Bagur reveals
        // 0.8s: Reveal duration finishes at 1.6s
        // Hold for 0.8s -> 2.4s total time before next phase.

        // --- PHASE 2: INVERSION (White -> Black, Text -> White, Move/Scale) ---
        setTimeout(() => {
            body.classList.add('intro-inverting');
        }, 2400);

        // Transition takes 0.8s. So at 3.2s, inversion is done.

        // --- PHASE 3: REVEAL (Main Content Fades In) ---
        setTimeout(() => {
            body.classList.add('intro-reveal');
            
            // Mark intro as complete to remove overlay pointer events
            body.classList.add('intro-complete');
            
            // Save session
            localStorage.setItem('introPlayed', 'true');
        }, 3200);

    } else {
        // --- SKIP INTRO (Immediate Load) ---
        body.classList.add('intro-skipped');
        // Force styling immediately without transition
        body.style.backgroundColor = '#000000';
        body.style.color = '#ffffff';
        if(introWrapper) introWrapper.style.display = 'none';
    }

    // ---------------------------------------------------------
    // STANDARD SITE INTERACTIONS
    // ---------------------------------------------------------
    
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