// Get all card elements
const cards = document.querySelectorAll('.card');

// Function to toggle background color
function toggleBackgroundColor(event) {
    const card = event.currentTarget;
    const currentColor = card.style.backgroundColor;

    if (currentColor === 'aqua') {
        card.style.backgroundColor = ''; // Set to default (empty) to remove inline style
    } else {
        card.style.backgroundColor = 'aqua';
    }
}

// Attach click event listener to each card
cards.forEach(card => {
    card.addEventListener('click', toggleBackgroundColor);
});
