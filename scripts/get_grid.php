<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
session_start();
$file = file_get_contents('../data/'.$_SESSION['gameid'].'.json');
$content = json_decode($file, true);
$grid = $content['grid'];
echo json_encode($grid);