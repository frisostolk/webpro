<?php
$to = "../data/";
$files = glob($to."*.json");
foreach($files as $file){
    if(is_file($file))
        unlink($file);
}