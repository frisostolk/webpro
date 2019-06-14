<?php

ini_set('display_errors', 1);
$old_json = file_get_contents("../webpro/players.json");
$json_decode = json_decode($old_json, true);
$json_file = fopen('../webpro/players.json', 'w');
    $new_user = [
        'data' => 'null'
    ];
    fwrite($json_file, json_encode($new_user));
    fclose($json_file);
?>