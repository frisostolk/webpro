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
    $game = array(
        "sessionID0" => $_SESSION['gameid'],
        "turn" => 0,
        "state" => null,
        "creationDateTime" => time(),
        "lastActionDateTime" => time(),
        "grid" => array(
        )
    );
    echo $_SESSION['gameid'];

    $to = "../data/";
    $filename = $to.$_SESSION['gameid'];
    $json_file = fopen($filename.'json', 'w');
    fwrite($json_file, json_encode($game));
    fclose($json_file);
    header('Location: ../game.php');

}
?>