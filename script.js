document.addEventListener('DOMContentLoaded', () => {
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
                    lockScreen.style.display = 'none';
                    localStorage.setItem('lab_access', 'true');
                }
            });
        }

        if (localStorage.getItem('lab_access') === 'true' && lockScreen) {
            lockScreen.style.display = 'none';
        }
    }
});
