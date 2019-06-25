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

<div id="styled">
    <form action="../webpro/scripts/create_game.php" method="post">
        <button id="button_id" name="button_id" class="btn btn-primary mb-2">Generate an ID</button>
    </form>
    <p>Your Game ID: </p>
    <p id="id"></p>

    <form method="POST" id="welcome_form">
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
</div>

<?php
error_reporting(E_ALL);
if(isset($_POST['button_id'])){
ini_set('display_errors', 1);
    $game_id = uniqid();
    $files = scandir('../data/');
    p_print( $files);
    if(in_array($game_id, $files)){
        echo"sweet";
    }
    else{
        $json_file = fopen($game_id.'.json', 'w');
        fwrite($json_file, json_encode($files));
    }
    }
?>

<?php
include __DIR__ . '/tpl/body_end.php';
?>

