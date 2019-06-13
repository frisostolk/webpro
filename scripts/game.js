$(function() {
    // Variable assignment for further use
    let firstChoice = '';
    let secondChoice = '';
    let guesses = 0;
    let previousChoice = null;
    let delay = 1200;
    let match_empty = false;
    let match_count = 0;
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
    // Create the game layout, laying out the cards randomly
    let gameLayout = cardsList.concat(cardsList).sort(function () {
        return 0.5 - Math.random();
    });

    // Display cards
    let game = document.getElementById('game');
    let grid = document.createElement('section');
    grid.setAttribute('class', 'grid');
    game.appendChild(grid);

    // For each card (item) in layout assigning a name and image
    gameLayout.forEach(function (item) {
        let name = item.name,
            img = item.img;

        let card = document.createElement('div');
        card.classList.add('card');
        card.dataset.name = name;
        card.classList.add(name);
        let front = document.createElement('div');
        front.classList.add('front');

        let back = document.createElement('div');
        back.classList.add('back');
        back.style.backgroundImage = 'url(' + img + ')';

        grid.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
    });

    // Function to check whether the two cards selected are the same (match)
    let match = function match() {
        let selected = document.querySelectorAll('.selected');
        selected.forEach(function () {
            card.classList.add('match');
        });
    };
    //console.log(match_empty);
    let matched = function matched() {
            $.getJSON("../webpro/data/match.json", function (data) {
                var x;
                for (x in data) {
                    console.log(data[x].data);
                    $("." + data[x].data).addClass("match");
                }

            });
    };
    setInterval(matched, 100);
    // Function to reset the two choices so the next turn can start
    let resetChoices = function resetChoices() {
        firstChoice = '';
        secondChoice = '';
        guesses = 0;
        previousChoice = null;

        let selected = document.querySelectorAll('.selected');
        selected.forEach(function (card) {
            card.classList.remove('selected');
        });
    };
    if(match_count > 11){
        alert('spel voorbij');
    };
    //
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
                    match_count += 1;
                    match_empty = true;
                    $.ajax({
                        url: '../webpro/scripts/add_match.php',
                        type: 'POST',
                        data: { "data" : firstChoice },
                        success: function (data)
                        {
                            console.log(data);
                        }
                    });
                }
                setTimeout(resetChoices, delay);
            }
            previousChoice = clicked;
        }
        if(match_count > 11){
            alert('spel voorbij');
        };

    });
});