document.addEventListener('DOMContentLoaded', () => {
    // 1. Spotlight Effect
    const spotlight = document.getElementById("spotlight");
    if (spotlight) {
        document.addEventListener("mousemove", e => {
            spotlight.style.left = e.clientX + "px";
            spotlight.style.top = e.clientY + "px";
        });
    }

    // 2. Dynamic Card Glow Border
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty("--x", x + "px");
            card.style.setProperty("--y", y + "px");
        });
    });

    // 3. Magnetic Buttons/Links
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

    // 4. Secret shortcut to Staging Page (Shift + S)
    document.addEventListener('keydown', (e) => {
        if (e.shiftKey && e.key === 'S') {
            window.location.href = 'staging.html';
        }
    });

    // 5. Staging Page Logic
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