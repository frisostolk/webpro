<?php
ini_set('display_errors', 1);
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    // Create new User Array
    $new_user = [
        'data' => $_POST['data'],
    ];
    $myJSON = json_encode($new_user);
    $old_json =  file_get_contents("../data/match.json");
    $json_decode = json_decode($old_json, true);
    $json_file = fopen('../data/match.json', 'w');

    if($json_decode == null){
        echo"dan is hij leeg";
        fwrite($json_file, json_encode($new_user));
        fclose($json_file);
    }
    else{
        array_push($json_decode, $new_user);
        fwrite($json_file, json_encode($json_decode));
        fclose($json_file);

    }
    print_r($json_decode);
}
?>
