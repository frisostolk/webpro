$(function() {
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
    var gameGrid = cardsArray.concat(cardsArray).sort(function () {
        return 0.5 - Math.random();
    });

    var firstGuess = '';
    var secondGuess = '';
    var count = 0;
    var previousTarget = null;
    var delay = 1200;

    var game = document.getElementById('game');
    var grid = document.createElement('section');
    grid.setAttribute('class', 'grid');
    game.appendChild(grid);

    gameGrid.forEach(function (item) {
        var name = item.name,
            img = item.img;


        var card = document.createElement('div');
        card.classList.add('card');
        card.dataset.name = name;

        var front = document.createElement('div');
        front.classList.add('front');

        var back = document.createElement('div');
        back.classList.add('back');
        back.style.backgroundImage = 'url(' + img + ')';

        grid.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
    });

    var match = function match() {
        var selected = document.querySelectorAll('.selected');
        selected.forEach(function (card) {
            card.classList.add('match');
        });
    };

    var resetGuesses = function resetGuesses() {
        firstGuess = '';
        secondGuess = '';
        count = 0;
        previousTarget = null;

        var selected = document.querySelectorAll('.selected');
        selected.forEach(function (card) {
            card.classList.remove('selected');
        });
    };

    grid.addEventListener('click', function (event) {

        var clicked = event.target;

        if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
            return;
        }

        if (count < 2) {
            count++;
            if (count === 1) {
                firstGuess = clicked.parentNode.dataset.name;
                console.log(firstGuess);
                clicked.parentNode.classList.add('selected');
            } else {
                secondGuess = clicked.parentNode.dataset.name;
                console.log(secondGuess);
                clicked.parentNode.classList.add('selected');
            }

            if (firstGuess && secondGuess) {
                if (firstGuess === secondGuess) {
                    setTimeout(match, delay);
                }
                setTimeout(resetGuesses, delay);
            }
            previousTarget = clicked;
        }
    });
});