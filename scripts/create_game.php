<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
$files = scandir('../data/');
echo print_r ($files, true);
if(in_array($game_id, $files)){
    echo"sweet";
}
else{
    session_start();
    $_SESSION['gameid'] = uniqid();
    $_SESSION['name1'] = $_POST['name_id'];
    $game = array(
        "sessionID0" => session_id(),
        "sessionID1" => null,
        "player1" => $_SESSION['name1'],
        "player2" => null,
        "turn" => 0,
        "state" => null,
        "creationDateTime" => time(),
        "lastActionDateTime" => time(),
        "match" => array(
        )
    );
    echo $_SESSION['gameid'];

    $to = "../data/";
    $filename = $to.$_SESSION['gameid'];
    $json_file = fopen($filename.'.json', 'w');
    fwrite($json_file, json_encode($game));
    fclose($json_file);
    header('Location: ../game.php');
    // om opponent check te testen onderstaand uitcommenten en bovenstaand commenten
//    header('Location: ../waitingroom.php');

}
?>