$(function() {
    // Variable assignment for further use
    let firstChoice = '';
    let secondChoice = '';
    let guesses = 0;
    let previousChoice = null;
    let delay = 1200;
    let match_empty = false;
    let player1_move = true;
    let player2_move = false;
    var player1;
    var player2;
    let ip_move;
    let i = 0;
    let match_count = 0;
    $.getJSON("../webpro/players.json", function (players) {
        player1 = players[0].IP;
        player2 = players[1].IP;
        //alert(player1);
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
        //console.log(match_empty);
        let matched = function matched() {
            $.getJSON("../webpro/data/match.json", function (data) {
                var x;
                for (x in data) {
                    //console.log(data[x].data);
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

        // function to check if all cards have the class match
        let allMatchCheck = function allMatchCheck() {
            // if all cards have been matched this detects it and will stop the game and show the modal
            var flag = true;
            // looks in section for all divs with class card
            $('section').find('div.card').each(function(){
                // looping through all div.card and checking whether it has 'match' as class
                // of all of them have 'match' the flag will stay true
                if(!$(this).hasClass('match'))
                    flag = false;
            });
            // if flag is true the modal shows just as when the time is up
            if(flag){
                console.log("all have match");
                $("#timer").hide();x
                // Get the modal
                var modal = document.getElementById("endGameModal");

                // Get the <span> element that closes the modal
                var button = document.getElementsByClassName("close")[0];

                // Show the modal
                modal.style.display = "block";

                // When player clicks on button, player is redirected to the homepage
                button.onclick = function() {
                    window.location = 'http://siegfried.webhosting.rug.nl/~s3782808/webpro/index.php'
                };
            }
            else {
                console.log("not all have match")
            }

        };

        //
        grid.addEventListener('click', function (event) {
            $.getJSON("../webpro/data/move.json", function (move) {
                var move_11 = move.IP;
                console.log(move_11);
                $.ajax({
                    url: '../webpro/scripts/get_ip.php',
                    dataType: 'json',
                    type: 'POST',
                    data: {'data': 'test'},
                });
                if (i % 2 === 0) {
                    ip_move = players[0].IP;
                    //console.log(ip_move+ " boem");
                } else {
                    ip_move = players[1].IP;
                    //console.log(ip_move + " help");
                }
                if(move_11 === player1){
                    console.log("gelijk");
                    console.log(move_11);
                    console.log(player1);
                    var gelijk = true;
                }else{
                    console.log("ongelijk");
                    console.log(move_11);
                    console.log(player1);
                    var gelijk = false;
                }

                let clicked = event.target;
                // Making sure that only the images can be clicked and not the grid in between
                if (clicked.nodeName === 'SECTION' || clicked === previousChoice || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match') || move_11 === ip_move) {
                    return;
                }
                // statements to check whether it's a match or not
                if (guesses < 2) {
                    guesses++;
                    // when its the first guess, so guesses equals 1 this registrates the name to firstchoice
                    if (guesses === 1) {
                        firstChoice = clicked.parentNode.dataset.name;
                        //console.log(firstChoice);
                        clicked.parentNode.classList.add('selected');
                        // if guesses is not 1, it has to be the second choice, so that name is registrated to secondChoice
                    } else {
                        secondChoice = clicked.parentNode.dataset.name;
                        //console.log(secondChoice);
                        clicked.parentNode.classList.add('selected');
                    }

                    // if the names in first and secondChoice are equal it means there is a match, the match function is then activated and
                    // the choices are reset to continue the game
                    if (firstChoice && secondChoice) {
                        i += 1;
                        if (firstChoice === secondChoice) {
                            match_count += 1;
                            match_empty = true;
                            $.ajax({
                                url: '../webpro/scripts/add_match.php',
                                type: 'POST',
                                data: {"data": firstChoice},
                            });
                        }
                        setTimeout(resetChoices, delay);
                    }
                    previousChoice = clicked;
                }

            });
        });
    });
});