<?php
// P_Print function
function p_print($array){
    echo "<pre>";
    print_r($array);
    echo "</pre>";
}
// Image defined
$background = "data/img/background.jpg";

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta Data -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Webprogrammeren</title>
    <!-- Styles -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link type="text/css" rel="stylesheet" href="styles/styles.css">

    <!-- Scripts -->
    <!-- For some reason styles.css is not recognized to styling is done here for now -->
    <style type="text/css">
        #styled {
            background-color: white;
            box-sizing: border-box;
            position: absolute;
            padding: 16px;
            margin: 0 auto;
            border-radius: 15px;
        }

        body, html {
            height: 100%;
        }

        .bg {
            background: url('<?php echo $background;?>') center no-repeat;
            height: 100%;
            background-size: cover;
        }

    </style>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="scripts/validate_form.js" type="text/javascript"></script>
<!--    <script src="/webpro/socket.io/socket.io.js"></script>-->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js" type="text/javascript"></script>
</head>
<body>
<header>
    <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="../webpro/index.php">Memory</a>
        <a class="navbar-brand" href="../webpro/rules.php">Game Rules</a>
        <ul class="navbar-nav mr-auto">
            <?php $active = $navigation['active']; ?>
            <?php foreach($navigation['items'] as $title => $url){
                if ($title == $active){ ?>
                    <li class="nav-item active">
                        <a class="nav-link" href="<?= $url ?>"><?= $title ?></a>
                    </li>
                <?php } else {?>
                    <li class="nav-item">
                        <a class="nav-link" href="<?= $url ?>"><?= $title ?></a>
                    </li>
                <?php } ?>
            <?php } ?>
            <?php
            ?>
        </ul>
    </nav>
</header>

<!-- Div for the background -->
<div class="bg">
