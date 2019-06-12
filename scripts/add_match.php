<?php
ini_set('display_errors', 1);
include __DIR__ . '/tpl/body_end.php';
print_r($_POST);
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    // Create new User Array
    $new_user = [
        'data' => $_POST['data'],
    ];
    $myJSON = json_encode($new_user);
    $old_json =  file_get_contents("../webpro/data/match.json");
    $json_decode = json_decode($old_json, true);
    array_push($json_decode, $new_user);
    print_r($json_decode);
    $json_file = fopen('/webpro/data/match.json', 'w');
    fwrite($json_file, json_encode($json_decode));
    fclose($json_file);
}
?>
