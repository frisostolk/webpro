let cardsArray = [
    {
        name: 'birdo',
        img: '/webpro/data/img/birdo.png',
    },
    {
        name: 'bob_de_bouwer',
        img: '/webpro/data/img/bob_de_bouwer.png',
    },
    {
        name: 'bowser',
        img: '/webpro/data/img/bowser.png',
    },
    {
        name: 'dry_bones',
        img: '/webpro/data/img/dry_bones.png',
    },
];
// For each item in the cardsArray array...

let game = document.getElementById('game');
// Create a section with a class of grid
let grid = document.createElement('section');
grid.setAttribute('class', 'grid');
// Append the grid section to the game div
game.appendChild(grid);
cardsArray.forEach(item => {
    // Create a div
    const card = document.createElement('div');

    // Apply a card class to that div
    card.classList.add('card');

    // Set the data-name attribute of the div to the cardsArray name
    card.dataset.name = item.name;

    // Apply the background image of the div to the cardsArray image
    card.style.backgroundImage = `url(${item.img})`;

    // Append the div to the grid section
    grid.appendChild(card);
});

