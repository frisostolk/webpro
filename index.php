<?php
$page_title = 'Memory';
$navigation = Array(
    'Memory' => 'Memory',
    'items' => Array(
    )
);
include __DIR__ . '/tpl/head.php';
include __DIR__ . '/tpl/body_start.php';

echo"<h2>Welcome to Online Memory!</h2>"; ?>

<div id="submit" onclick="generate_id()" class="btn btn-primary mb-2">Generate an ID</div>
<p id="id"></p>

<form method="POST" id="welcome_form">
    <div class="form-group row">
        <label for="name" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
            <input type="text" onkeyup="check_name()" class="form-control" name="name" id="name" placeholder="Enter your Name">
        </div>
    </div>
    <div class="form-group row">
        <label for="id" class="col-sm-2 col-form-label">Game ID</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" name="id" id="id" placeholder="Enter your ID">
        </div>
    </div>
    <div id="submit" class="btn btn-primary mb-2">Join game</div>
</form>

<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    // Create new User Array
    $new_user = [
        'name' => $_POST
        ['name'],
        'id' => $_POST
        ['id']
    ];
    $myJSON = json_encode($new_user);
    $old_json =  file_get_contents("players.json");
    $json_decode = json_decode($old_json, true);
    $count_json = count($json_decode);
    print_r($json_decode);
    array_push($json_decode, $new_user);
    echo$count_json;
    if($count_json < 5){
    $json_file = fopen('players.json', 'w');
    fwrite($json_file, json_encode($json_decode));
    fclose($json_file);
    }
}

?>
<?php
include __DIR__ . '/tpl/body_end.php';
?>


