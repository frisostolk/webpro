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
    array_push($game, [
        "sessionID1" => session_id()
    ]);


    $to = "../data/";
    $filename = $to.$game_id;
    $json_file = fopen($filename.'json', 'w');
    fwrite($json_file, json_encode($game));
    fclose($json_file);
}
?>
