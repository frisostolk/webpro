<?php
function getip()
{
    ini_set('display_errors', 1);
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        //ip from share internet
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        //ip pass from proxy
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}
    $old_json = file_get_contents("../data/move.json");
    $json_decode = json_decode($old_json, true);
    $json_file = fopen('../data/move.json', 'w');
    $new_user = [
        'IP' => getip(),
    ];
    fwrite($json_file, json_encode($new_user));
    fclose($json_file);
?>