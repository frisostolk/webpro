<?php
$to = "../data/";
$filename = $to.$_SESSION['gameid'];
$json_file = fopen($filename.'.json', 'w') or die("can't open file");
fclose($json_file);
$file_to_delete = $filename;
unlink($filename) or die("Couldn't delete file");
?>

