document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio initialized');
    
    // Add any interactive features here
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Subtle feedback on hover
        });
    });
});
