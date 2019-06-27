</div>
<?php
include __DIR__ . '/tpl/head.php';
session_start();
include __DIR__ . '/tpl/body_start.php';
?>

<br>

<div id="styled">
    <h2>Please wait for your opponent to arrive! The game will start as soon as he/she gets online.</h2>
</div>


<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// hier moet code komen die telkens refresht en checkt of sessionID1 op null staat of is ingevuld, als het is ingevuld
// moet je worden doorgestuurd naar game.php. Hopelijk gaat dat dan tegelijk met de player 2, dan lopen de timers ook
// tegelijk
echo '<script src="../scripts/check_for_opponent.js"></script>';

include __DIR__ . '/tpl/body_end.php';

