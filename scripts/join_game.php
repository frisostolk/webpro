<?php
error_reporting(E_ALL);
session_start();
ini_set('display_errors', 1);
$files = scandir('../data/');
$file = $_POST['ID'].".json";
echo $file;
if(in_array($file, $files)){
    $_SESSION['gameid'] = $_POST['ID'];
    $_SESSION['name'] = $_POST['name'];
    $json_file = file_get_contents("../data/".$file);
    $json_file = json_decode($json_file, true);
    $_SESSION['player1'] = $json_file['player1'];
    $_SESSION['player2'] = $_POST['name'];
    $filename = "../data/".$file;
    $file_open = fopen($filename, 'w');
    fwrite($file_open, json_encode($json_file));
    fclose($file_open);
    header('Location: ../game.php');
}
else {
    header('Location: ../index.php');
}



?>
