<?php
session_start();
$file_path = "../data/" . $_SESSION['gameid'] . ".json";
$file = file_get_contents($file_path);
$content = json_decode($file, true);
$turn = $content['turn'];
if($turn == 0){
    $turn = 1;
}else{
    $turn = 0;
}
$content['turn'] = $turn;
$file_open = fopen($file_path, 'w');
fwrite($file_open, json_encode($content));
fclose($file_open);
?>