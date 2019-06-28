
$(function() {
    // Variable assignment for further use
    let firstChoice = '';
    let secondChoice = '';
    let guesses = 0;
    let previousChoice = null;
    let delay = 1200;
    let cardsList = [
        {
            name: 'bee',
            img: 'data/img/bee.png',
            num: 1,
        },
        {
            name: 'cake',
            img: 'data/img/cake.png',
            num: 2,
        },
        {
            name: 'cat',
            img: 'data/img/cat.png',
            num: 3,
        },
        {
            name: 'dog',
            img: 'data/img/dog.png',
            num: 4,
        },
        {
            name: 'sheep',
            img: 'data/img/sheep.png',
            num: 5,
        },
        {
            name: 'snake',
            img: 'data/img/snake.png',
            num: 6,
        },
        {
            name: 'penguin',
            img: 'data/img/penguin.png',
            num: 7,
        },
        {
            name: 'pikachu',
            img: 'data/img/pikachu.png',
            num: 8,
        },
        {
            name: 'rabbit',
            img: 'data/img/rabbit.png',
            num: 9,
        },
        {
            name: 'rainblob',
            img: 'data/img/rainblob.png',
            num: 10,
        },
        {
            name: 'turtle',
            img: 'data/img/turtle.png',
            num: 11,
        },
        {
            name: 'wumpus',
            img: 'data/img/wumpus.png',
            num: 12,
        },
    ];


    // Function to get grid array that is created in get_grid.php
    // it then loops through that array of numbers and assigns the names and images to them bu using the cardslist
    let getGrid = function getGrid() {
        // Display cards
        let game = document.getElementById('game');
        let grid = document.createElement('section');
        grid.setAttribute('class', 'grid');
        game.appendChild(grid);

        // get grid array
        let requestGrid = $.post('../webpro/scripts/get_grid.php', {'index': 'test'});
        requestGrid.done(function (dataGrid) {
            var js_array = JSON.parse(dataGrid);
            var layout = [];
            for (i = 0; i < js_array.length; i++) {
                layout.push(js_array[i]);
            }
            layout.forEach(function(item){
                cardsList.forEach(function(cardl){
                    if (cardl.num === item){
                        let name = cardl.name,
                            img = cardl.img;

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
                    }
                })
            });
        });

    };

    getGrid();

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

    // Function to show end game modal if all matches are found
    let allMatches = function allMatches(){
        $("#timer").hide();
        // Get the modal
        var modal = document.getElementById("endGameModal");

        // Get the <span> element that closes the modal
        var button = document.getElementsByClassName("close")[0];

        // Show the modal
        modal.style.display = "block";

        // When player clicks on button, player is redirected to the homepage
        button.onclick = function () {
            window.location = '../webpro/index.php'
        }
    };

    // Function to get matches and add that class to the card also checks if all are matched
    let addMatch = function addMatch() {
        let request2 = $.post('../webpro/scripts/getmatch.php', {'index': 'test'});
        request2.done(function (data2) {
            var js_array = JSON.parse(data2);
            for (i = 0; i < js_array.length; i++) {
                $("." + js_array[i]).addClass('match');
            }
            if (js_array.length > 11) {
                allMatches();
            }
        });
    };


    // Function to check what turn it is with ajax and to call clicklistener when it is the player's turn
    let checkTurn = function checkTurn(){
        // request checks whos turn it is
        let index = $('.card').val();
        let request = $.post('../webpro/scripts/turn.php', {'index' : index});
        request.done(function(data){
            if(data == 0){
                $(document.body).off('click', '.card');
                checkTurn();
            }else {
                console.log(data);
                clickListener();
            }
        });
    };

    // function that calls the entire game which happens with clicks and only for the one who's turn it is
    function clickListener() {
        $(document.body).on('click', '.card',  function (event) {
            // first check if there are matches already
            addMatch();

            // request checks whos turn it is
            checkTurn();

            // Making sure that only the images can be clicked and not the grid in between
            let clicked = event.target;
            if (clicked.nodeName === 'SECTION' || clicked === previousChoice ||
                clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
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
                    $(document.body).off('click', '.card'); // can't click unless it's a match which is checked below
                    if (firstChoice === secondChoice) {
                        console.log('match');
                        let index = $(this).val();
                        let request = $.post('../webpro/scripts/add_match.php', { 'index': firstChoice });
                        request.done(function(data) {
                            $('#player2-score').text(data['score2']);
                            $('#player1-score').text(data['score1']);
                            addMatch();
                        })
                    }
                    else{ // player does not have a match so the turn switches
                        console.log('no match');
                        let index = $(this).val();
                        let request = $.post('../webpro/scripts/switch_turn.php', { 'index': index });
                    }
                    setTimeout(resetChoices, delay); // choices are reset to be able to detect new selections
                }
                previousChoice = clicked;

            }
        });

    }

    checkTurn();

});