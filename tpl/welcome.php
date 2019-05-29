<?php
    echo"<h2>Welcome Player!</h2>";
    ?>
<form action="/webpro/game.php" method="POST" id="welcome_form">
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
    <div id="submit" class="btn btn-primary mb-2">Let's play</div>
    <script src="../scripts/validate_form.js" type="text/javascript"></script>

</form>
<script>function validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    function check_email() {
        let email = $('#email');
        let email_value = email.val();
        if (validateEmail(email_value)) {
            email.removeClass("is-invalid");
            email.addClass("is-valid");
            return true
        } else {
            email.removeClass("is-valid");
            email.addClass("is-invalid");
            return false
        }
    }
    function check_name() {
        let name = $('#name');
        let nameForm = name.val();
        if (nameForm !== "") {
            name.removeClass("is-invalid");
            name.addClass("is-valid");
            return true
        } else if (nameForm === "") {
            name.removeClass("is-valid");
            name.addClass("is-invalid");
            return false
        }
    }
    function check_form() {

        if(check_name && check_email ){
            $("#welcome_form").submit();
        }
    }

    window.onload = function() {
        $( "#submit" ).click(function() {
            check_form();
        });
    };</script>