<?php

ini_set('display_errors', 1);
    $old_json = file_get_contents("../data/match.json");
    $json_decode = json_decode($old_json, true);
    $json_file = fopen('../data/match.json', 'w');

    if ($json_decode == null) {
        echo "dan is hij leeg";
        fwrite($json_file, json_encode($new_user));
        fclose($json_file);
    } else {
        $new_user = [
            'data' => 'null'
        ];
        fwrite($json_file, json_encode($new_user));
        fclose($json_file);

    }
    print_r($json_decode);


