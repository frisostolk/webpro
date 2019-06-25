
</div>
<?php
include __DIR__ . '/tpl/head.php';
session_start();
include __DIR__ . '/tpl/body_start.php';
?>
<script src="scripts/game.js"></script>
<script src="scripts/timer.js"></script>
<style>
    #gameid{
        position: absolute;
        left: 0px;
        right: 500px;
    }
</style>

<div id="game">
    <div id="timer">You still have <span id="time">10:00</span> minutes/seconds!</div>
    <div id="scores">
        <p>Scores:</p>
        <p>Player 1:</p>
        <p>Player 2:</p>
        <p>GAME ID:</p>
        <?php
        $hallo = $_SESSION['gameid'];
        echo $hallo;
        ?>
    </div>
    <div id="endGameModal" class="modal">
        <div class="modal-content">
            <p>The game has ended!</p>
            <p>Score Player 1: </p>
            <p>Score Player 2: </p>
            <button class="close">Let's play another game!</button>
        </div>
    </div>
</div>

<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
include __DIR__ . '/tpl/body_end.php';