<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);
    $file = file_get_contents('../data/'.$_SESSION['gameid'].'.json');
    $content = json_decode($file, true);
    $match = $content['match'];
    $match[] = $_POST['index'];
    $content['match'] = $match;
    $json_file = fopen('../data/'.$_SESSION['gameid'].'.json', 'w');
    fwrite($json_file, json_encode($content));
// if the match array contains twelve items all cards have been matched so the endGame modal must pop up end the
// session has to be destroyed, and maybe delete json file?
if (count($content['match']) == 1){
    echo '<script src="../scripts/all_match_check.js"></script>';
    session_destroy();
    echo'het werkt';
}
?>
