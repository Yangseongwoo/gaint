function toggleCard(element) {
    if (element.classList.contains('expanded')) {
        element.classList.remove('expanded');
    } else {
        // Close other expanded cards
        const expandedCards = document.querySelectorAll('.event-item.expanded');
        expandedCards.forEach(card => card.classList.remove('expanded'));
        
        // Expand the clicked card
        element.classList.add('expanded');
    }
}
