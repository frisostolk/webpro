<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
session_start();
$file = file_get_contents('../data/'.$_SESSION['gameid'].'.json');
$content = json_decode($file, true);
$min = array_values($content['match']);
echo json_encode($min);