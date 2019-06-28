<script type="text/javascript">
console.log("all have match");
$("#timer").hide();
// Get the modal
var modal = document.getElementById("endGameModal");

// Get the <span> element that closes the modal
var button = document.getElementsByClassName("close")[0];

// Show the modal
modal.style.display = "block";

// When player clicks on button, player is redirected to the homepage
button.onclick = function() {
    window.location = '../index.php'
};
<?php
$to = "../data/";
$filename = $to.$_SESSION['gameid'];
$json_file = fopen($filename.'.json', 'w') or die("can't open file");
fclose($json_file);
$file_to_delete = $filename;
unlink($filename) or die("Couldn't delete file"); ?>

</script>


