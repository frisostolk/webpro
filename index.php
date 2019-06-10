<?php
$page_title = 'Memory';
$navigation = Array(
    'Memory' => 'Memory',
    'items' => Array(
    )
);
include __DIR__ . '/tpl/head.php';
include __DIR__ . '/tpl/body_start.php';
echo"<h2>Welcome Player!</h2>";?>
<form method="POST" id="welcome_form">
    <div class="form-group row">
        <label for="email" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
            <input onkeyup="check_email()" type="text" class="form-control" name="email" id="email" placeholder="email@example.com">
        </div>
    </div>
    <div class="form-group row">
        <label for="name" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
            <input type="text" onkeyup="check_name()" class="form-control" name="name" id="name" placeholder="name">
        </div>
    </div>
    <div id="submit" class="btn btn-primary mb-2">Let's play</div
</form>
<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    // Create new User Array
    print_r($_POST);
    $new_user = [
        'name' => $_POST
        ['name'],
        'email' => $_POST
        ['email']
    ];
    $myJSON = json_encode($new_user);
    echo $myJSON;
    $json_file = fopen('/data/players.json', 'w');
    fwrite($json_file, json_encode($new_user));
    fclose($json_file);
}
error_reporting(E_ALL);
ini_set('display_errors', 1);

?>
<?php
include __DIR__ . '/tpl/body_end.php';
?>


