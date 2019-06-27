</div>
<?php
include __DIR__ . '/tpl/head.php';
session_start();
include __DIR__ . '/tpl/body_start.php';
?>
<script src="scripts/game.js"></script>
<script src="scripts/timer.js"></script>

<div id="timer">You still have <span id="time">10:00</span> minutes/seconds!</div>

<div id="scores">
    <p>Score
        <?php
        $player_1 = $_SESSION['player1'];
        echo $player_1, ":";
        ?>
    </p>
    <p>Score
        <?php
        $player_2 = $_SESSION['player2'];
        echo $player_2, ":";
        ?>
    </p>
</div>

<div id="game_id">
    <p>Game ID:
        <?php
        $gameid = $_SESSION['gameid'];
        echo $gameid;
        ?>
    </p>
    <br>
</div>

<div id="game">
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