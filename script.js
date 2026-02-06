document.addEventListener('DOMContentLoaded', () => {
    // Initial Reveal Animation
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

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
                if (e.target.value === 'admin') {
                    lockScreen.classList.add('hidden');
                    localStorage.setItem('lab_access', 'true');
                }
            });
        }

        if (localStorage.getItem('lab_access') === 'true' && lockScreen) {
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
                        project.style.display = 'flex';
                    } else {
                        project.style.display = 'none';
                    }
                });
            });
        });
    }

    // Subtle Scroll Reveal for Project Items
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        item.style.transition = "all 0.8s cubic-bezier(0.19, 1, 0.22, 1)";
        observer.observe(item);
    });
});