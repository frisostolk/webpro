

</div>
<?php
include __DIR__ . '/tpl/head.php';
include __DIR__ . '/tpl/body_start.php';
?>
<script src="scripts/game.js"></script>
<script src="scripts/timer.js"></script>
<div id="game">
    <div id="timer">You still have <span id="time">02:00</span> minutes/seconds!</div>
</div>

<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
include __DIR__ . '/tpl/body_end.php';