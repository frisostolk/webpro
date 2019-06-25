

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
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    // Create new User Array
    $new_user = [
        'name' => $_POST
        ['name'],
        'email' => $_POST
        ['email'],
        'IP' => getUserIpAddr()
    ];
    $myJSON = json_encode($new_user);
    $old_json =  file_get_contents("players.json");
    $json_decode = json_decode($old_json, true);
    $count_json = count($json_decode);
    print_r($json_decode);
    array_push($json_decode, $new_user);
    echo$count_json;
    if($count_json < 5){
        $json_file = fopen('players.json', 'w');
        fwrite($json_file, json_encode($json_decode));
        fclose($json_file);
    }
}
function getUserIpAddr(){
    if(!empty($_SERVER['HTTP_CLIENT_IP'])){
        //ip from share internet
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    }elseif(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
        //ip pass from proxy
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    }else{
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}
error_reporting(E_ALL);
ini_set('display_errors', 1);
include __DIR__ . '/tpl/body_end.php';