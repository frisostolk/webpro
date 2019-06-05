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
<form action="game.php" method="POST" id="welcome_form">
    <div class="form-group row">
        <label for="email" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
            <input onkeyup="check_email()" type="text" class="form-control" id="email" placeholder="email@example.com">
        </div>
    </div>
    <div class="form-group row">
        <label for="name" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
            <input type="text" onkeyup="check_name()" class="form-control" id="name" placeholder="name">
        </div>
    </div>
    <div id="submit" class="btn btn-primary mb-2">Let's play</div
</form>
<?php
include __DIR__ . '/tpl/body_end.php';
?>


