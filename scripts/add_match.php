<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);
    $file = file_get_contents('../data/'.$_SESSION['gameid'].'.json');
    $content = json_decode($file, true);
    $match = $content['match'];
    $match[] = $_POST['index'];
    if($content['sessionID0'] === session_id()){
        $content['score1'] += 1;
    }else{
        $content['score2'] += 1;
    }
    $content['match'] = $match;
    $json_file = fopen('../data/'.$_SESSION['gameid'].'.json', 'w');
    fwrite($json_file, json_encode($content));
    header('Content-Type: application/json');
    echo json_encode($content);
?>
