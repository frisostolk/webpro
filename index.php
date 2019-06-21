<?php
$page_title = 'Memory';
$navigation = Array(
    'Memory' => 'Memory',
    'items' => Array(
    )
);
include __DIR__ . '/tpl/head.php';
include __DIR__ . '/tpl/body_start.php';

echo"</br><h2>Welcome to Online Memory!</h2></br>";
echo"<h5>To start a game you need a Game ID. If the other person you want to play with already has a Game ID, enter this ID so you can play together.</h5></br>";
?>

<div id="button" class="btn btn-primary mb-2">Generate an ID</div>
<p>Your Game ID: </p>
<p id="id"></p>

<form method="POST" action="http://siegfried.webhosting.rug.nl/~s3782808/webpro/game.php" id="welcome_form">
    <div class="form-group row">
        <label for="name" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
            <input type="text" onkeyup="check_name()" class="form-control" name="name" id="name" placeholder="Enter your Name">
        </div>
    </div>
    <div class="form-group row">
        <label for="ID" class="col-sm-2 col-form-label">Game ID</label>
        <div class="col-sm-10">
            <input type="text" onkeyup="check_id()" class="form-control" name="ID" id="ID" placeholder="Enter your ID">
        </div>
    </div>
    <div id="submit" class="btn btn-primary mb-2">Join/start game</div>
</form>

<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    // Create new User Array
    $new_user = [
        'name' => $_POST
        ['name'],
        'ID' => $_POST
        ['ID']
    ];
    $myJSON = json_encode($new_user);
    $old_json =  file_get_contents("players.json");
    $json_decode = json_decode($old_json, true);
    array_push($json_decode, $new_user);
    $json_file = fopen('players.json', 'w');
    fwrite($json_file, json_encode($json_decode));
    fclose($json_file);
}

?>
<?php
include __DIR__ . '/tpl/body_end.php';
?>

