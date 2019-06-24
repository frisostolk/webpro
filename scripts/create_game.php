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
        $json_file = fopen($game_id.'.json', 'w');
        fwrite($json_file, json_encode($game));
        fclose($json_file);
        $to = "../webpro/data/";
        function move_file($json_file, $to){
            $path_parts = pathinfo($json_file);
            $newplace   = "$to/{$path_parts['basename']}";
            if(rename($json_file, $newplace))
                return $newplace;
            return null;
        }//deze functie schijnt niet te werken, heb ook al gewoon met rename geprobeerd en nog een ander ding
    }
?>