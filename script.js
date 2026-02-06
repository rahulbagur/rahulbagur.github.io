document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio initialized');
    
    // Secret shortcut to Staging Page (Shift + S)
    document.addEventListener('keydown', (e) => {
        if (e.shiftKey && e.key === 'S') {
            window.location.href = 'staging.html';
        }
    });

    // Add any interactive features here
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Subtle feedback on hover
        });
    });
});
