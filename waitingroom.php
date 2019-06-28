</div>
<?php
include __DIR__ . '/tpl/head.php';
session_start();
include __DIR__ . '/tpl/body_start.php';
?>

<br>

<div id="styled">
    <h2>Hello
        <?php
        $name = $_SESSION['name_id'];
        echo $name;
        ?>
    </h2>
    <h2>Your Game ID:
        <?php
        $hallo = $_SESSION['gameid'];
        echo $hallo;
        ?>
    </h2>
    <br>
    <h4>Send your Game ID to your friend so he/she can join you for a game of Memory.</h4>
    <br>
    <h4>The game will start as soon as he/she gets online.</h4>
</div>


<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// hier moet code komen die telkens refresht en checkt of sessionID1 op null staat of is ingevuld, als het is ingevuld
// moet je worden doorgestuurd naar game.php. Hopelijk gaat dat dan tegelijk met de player 2, dan lopen de timers ook
// tegelijk
echo '<script src="../scripts/check_for_opponent.js"></script>';

include __DIR__ . '/tpl/body_end.php';

