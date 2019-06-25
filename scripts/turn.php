<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    session_start();
    $sessie = session_id();
    $file_path = "../data/" . $_SESSION['gameid'] . ".json";
    $file = file_get_contents($file_path);
    $content = json_decode($file, true);
    $turn = $content['turn'];
    if($turn == 0) {
        $current_player = $content['sessionID0'];
        }
    else{
            $current_player = $content['sessionID1'];
        }
    if($sessie == $current_player){
    echo 1;
    }else{
        echo 0;
    }
?>
