<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);
    $file = file_get_contents('../data/'.$_SESSION['gameid'].'.json');
    $content = json_decode($file, true);
    $match = $content['match'];
    array_push($match, $_POST['index']);
    $content['match'] = $match;
    $json_file = fopen('../data/'.$_SESSION['gameid'].'.json', 'w');
    fwrite($json_file, json_encode($content));
?>
