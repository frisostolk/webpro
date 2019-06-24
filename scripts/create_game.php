<?php
error_reporting(E_ALL);
    ini_set('display_errors', 1);
    $game_id = uniqid();
    $files = scandir('../data/');
    echo serialize($files);
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
        $json_file = fopen($game_id.'.json', 'w');
        fwrite($json_file, json_encode($game));
    }
?> Ben er nu weer ff was ff aan kijken naar sessions