// werkt sws niet, moet misschien met check of  formulier is ingevuld

let opponentCheck = function opponentCheck() {
    $.getJSON("../webpro/data/.json", function (data) {
        var x;
        for (x in data) {
            if ($_SESSION['sessionID1'] != null){
                header('Location: ../webpro/game.php')
            }
        }

    });
};
setInterval(opponentCheck, 100);