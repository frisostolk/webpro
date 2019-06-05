$(function() {
    let firstGuess = ''
    let secondGuess = ''
    let count = 0
    let cardsArray = [
        {
            name: 'birdo',
            img: 'data/img/birdo.png',
        },
        {
            name: 'bob_de_bouwer',
            img: 'data/img/bob_de_bouwer.png',
        },
        {
            name: 'bowser',
            img: 'data/img/bowser.png',
        },
        {
            name: 'dry_bones',
            img: 'data/img/dry_bones.png',
        },
        {
            name: 'yoshi',
            img: 'data/img/yoshi.png',
        },
        {
            name: 'mario',
            img: 'data/img/mario.png',
        },
        {
            name: 'spiderman',
            img: 'data/img/spiderman.png',
        },
        {
            name: 'koopa_troopa',
            img: 'data/img/koopa_troopa.png',
        },
        {
            name: 'luigi',
            img: 'data/img/luigi.png',
        },
        {
            name: 'wario',
            img: 'data/img/wario.png',
        },
        {
            name: 'iron_man',
            img: 'data/img/iron_man.png',
        },
        {
            name: 'captain_america',
            img: 'data/img/captain.png',
        },
    ];
// For each item in the cardsArray array...

    let game = document.getElementById('game');
// Create a section with a class of grid
    let grid = document.createElement('section');
    grid.setAttribute('class', 'grid');
// Append the grid section to the game div
    let gameGrid = cardsArray.concat(cardsArray);
    gameGrid.sort(() => 0.5 - Math.random())
    game.appendChild(grid);
    gameGrid.forEach(item => {
        // Create a div
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.name = item.name

        // Create front of card
        const front = document.createElement('div')
        front.classList.add('front')

        // Create back of card, which contains
        const back = document.createElement('div')
        back.classList.add('back')
        back.style.backgroundImage = `url(${item.img})`

        // Append card to grid, and front and back to each card
        grid.appendChild(card)
        card.appendChild(front)
        card.appendChild(back)
    });
    let previousTarget = null
    grid.addEventListener('click', function(event) {
        // The event target is our clicked item
        let clicked = event.target

        // Do not allow the grid section itself to be selected; only select divs inside the grid
        if (clicked.nodeName === 'SECTION' || clicked === previousTarget) {
            return
        }
        if (count < 2) {
            count++
            if (count === 1) {
                // Assign first guess
                firstGuess = clicked.parentNode.dataset.name
                console.log(firstGuess)
                clicked.parentNode.classList.add('selected')
            } else {
                // Assign second guess
                secondGuess = clicked.parentNode.dataset.name
                console.log(secondGuess)
                clicked.parentNode.classList.add('selected')
            }
            // If both guesses are not empty...
            if (firstGuess !== '' && secondGuess !== '') {
                // and the first guess matches the second match...
                if (firstGuess === secondGuess) {
                    // run the match function
                    match()
                    resetGuesses();
                }else {
                    resetGuesses();
                }
            }
            previousTarget = clicked;
        }
    })
    const match = () => {
        var selected = document.querySelectorAll('.selected')
        selected.forEach(card => {
            card.classList.add('match')
        })
    }

    const resetGuesses = () => {
        firstGuess = ''
        secondGuess = ''
        count = 0

        var selected = document.querySelectorAll('.selected')
        selected.forEach(card => {
            card.classList.remove('selected')
        })
    }
    let delay = 1200;
    if (firstGuess === secondGuess) {
        setTimeout(match, delay)
        setTimeout(resetGuesses, delay)
    } else {
        setTimeout(resetGuesses, delay)
    }

});