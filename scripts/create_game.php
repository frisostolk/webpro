<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
$game_id = uniqid();
$files = scandir('../data/');
echo print_r ($files, true);
if(in_array($game_id, $files)){
    echo"sweet";
}
else{
    session_start();
    $game = array(
        "sessionID0" => session_id(),
        "sessionID1" => null,
        "turn" => 0,
        "state" => null,
        "creationDateTime" => time(),
        "lastActionDateTime" => time(),
        "grid" => array(
        )
    );

    $to = "../data/";
    $filename = $to.$game_id;
    $json_file = fopen($filename.'json', 'w');
    fwrite($json_file, json_encode($game));
    fclose($json_file);

}
?>