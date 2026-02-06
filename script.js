document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio initialized');
    
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
        
        // Simple "knock" - password is 'admin' for now. 
        // You can change this to any string.
        passInput.addEventListener('input', (e) => {
            if (e.target.value === 'admin') {
                lockScreen.classList.add('hidden');
                localStorage.setItem('lab_access', 'true');
            }
        });

        // Check for existing session
        if (localStorage.getItem('lab_access') === 'true') {
            lockScreen.classList.add('hidden');
        }

        // Filtering Logic
        const filters = document.querySelectorAll('.filter-tag');
        const projects = document.querySelectorAll('.project-draft');

        filters.forEach(filter => {
            filter.addEventListener('click', () => {
                filters.forEach(f => f.classList.remove('active'));
                filter.classList.add('active');
                
                const category = filter.getAttribute('data-filter');
                
                projects.forEach(project => {
                    if (category === 'all' || project.getAttribute('data-category') === category) {
                        project.classList.remove('hidden');
                    } else {
                        project.classList.add('hidden');
                    }
                });
            });
        });
    }

    // Add any interactive features here
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Subtle feedback on hover
        });
    });
});
