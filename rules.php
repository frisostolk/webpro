
</div>
<?php
include __DIR__ . '/tpl/head.php';
include __DIR__ . '/tpl/body_start.php';
?>

<div id="game">
    <br>
    <h1>Game Rules:</h1>
    <br>
    <ol>
        <li>Two players take turns.</li>
        <li>Turn over any two cards.</li>
        <li>If the two cards match, the player receives a point.</li>
        <li>If they don't match, the players turn has come to an end.</li>
        <li>Try to remember which card is on which position.</li>
        <li>The game is over when all the cards have been matched.</li>
        <li>The player with the most matches wins.</li>
    </ol>
</div>

<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
include __DIR__ . '/tpl/body_end.php';