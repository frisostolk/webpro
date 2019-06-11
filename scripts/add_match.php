<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    // Create new User Array
    $new_user = [
        'data' => $_POST['data'],
    ];
    $myJSON = json_encode($new_user);
    $old_json =  file_get_contents("/webpro/players.json");
    $json_decode = json_decode($old_json, true);
    array_push($json_decode, $new_user);
    print_r($json_decode);
    $json_file = fopen('webpro/players.json', 'w');
    fwrite($json_file, json_encode($json_decode));
    fclose($json_file);
}
?>
