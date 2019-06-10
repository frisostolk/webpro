function assign_card(cardsList, game, grid) {
    // Display cards

    grid.setAttribute('class', 'grid');
    game.appendChild(grid);
    // Create the game layout, laying out the cards randomly
    let gameLayout = cardsList.concat(cardsList).sort(function () {
        return 0.5 - Math.random();
    });
    // For each card (item) in layout assigning a name and image
    gameLayout.forEach(function (item) {
        let name = item.name,
            img = item.img;

        let card = document.createElement('div');
        card.classList.add('card');
        card.dataset.name = name;

        let front = document.createElement('div');
        front.classList.add('front');

        let back = document.createElement('div');
        back.classList.add('back');
        back.style.backgroundImage = 'url(' + img + ')';

        grid.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
    });
}
function match_cards(){
    let selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
        card.classList.add('match');
    });
}
function reset(){
    firstChoice = '';
    secondChoice = '';
    guesses = 0;
    previousChoice = null;

    let selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
        card.classList.remove('selected');
    });
}
$(function() {
    // Variable assignment for further use
    let firstChoice = '';
    let secondChoice = '';
    let guesses = 0;
    let previousChoice = null;
    let delay = 1200;
    let game = document.getElementById('game');
    let grid = document.createElement('section');
    let cardsList = [
        {
            name: 'bee',
            img: 'data/img/bee.png',
        },
        {
            name: 'cake',
            img: 'data/img/cake.png',
        },
        {
            name: 'cat',
            img: 'data/img/cat.png',
        },
        {
            name: 'dog',
            img: 'data/img/dog.png',
        },
        {
            name: 'sheep',
            img: 'data/img/sheep.png',
        },
        {
            name: 'snake',
            img: 'data/img/snake.png',
        },
        {
            name: 'penguin',
            img: 'data/img/penguin.png',
        },
        {
            name: 'pikachu',
            img: 'data/img/pikachu.png',
        },
        {
            name: 'rabbit',
            img: 'data/img/rabbit.png',
        },
        {
            name: 'rainblob',
            img: 'data/img/rainblob.png',
        },
        {
            name: 'turtle',
            img: 'data/img/turtle.png',
        },
        {
            name: 'wumpus',
            img: 'data/img/wumpus.png',
        },
    ];



    assign_card(cardsList, game, grid);
    // Function to check whether the two cards selected are the same (match)

    // Function to reset the two choices so the next turn can start

    grid.addEventListener('click', function (event) {

        let clicked = event.target;

        // Making sure that only the images can be clicked and not the grid in between
        if (clicked.nodeName === 'SECTION' || clicked === previousChoice || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
            return;
        }

        // statements to check whether it's a match or not
        if (guesses < 2) {
            guesses++;
            // when its the first guess, so guesses equals 1 this registrates the name to firstchoice
            if (guesses === 1) {
                firstChoice = clicked.parentNode.dataset.name;
                console.log(firstChoice);
                clicked.parentNode.classList.add('selected');
                // if guesses is not 1, it has to be the second choice, so that name is registrated to secondChoice
            } else {
                secondChoice = clicked.parentNode.dataset.name;
                console.log(secondChoice);
                clicked.parentNode.classList.add('selected');
            }

            // if the names in first and secondChoice are equal it means there is a match, the match function is then activated and
            // the choices are reset to continue the game
            if (firstChoice && secondChoice) {
                if (firstChoice === secondChoice) {
                    setTimeout(match_cards(), delay);
                }
                setTimeout(reset(), delay);
            }
            previousChoice = clicked;
        }
    });
});