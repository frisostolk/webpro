<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
$files = scandir('../data/');
echo print_r ($files, true);
session_start();
$grid = array(1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12);
shuffle($grid);

$_SESSION['gameid'] = uniqid();
$_SESSION['name1'] = $_POST['name_id'];

$game = array(
    "sessionID0" => session_id(),
    "sessionID1" => null,
    "player1" => $_SESSION['name1'],
    "player2" => null,
    "turn" => 0,
    "state" => null,
    "creationDateTime" => time(),
    "lastActionDateTime" => time(),
    "grid" => $grid,
    "match" => array()
);
echo $_SESSION['gameid'];

$to = "../data/";
$filename = $to.$_SESSION['gameid'];
$json_file = fopen($filename.'.json', 'w');
fwrite($json_file, json_encode($game));
fclose($json_file);
header('Location: ../game.php');
?>