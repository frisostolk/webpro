function check_name_id() {
    let name = $('#name_id');
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

function check_id() {
    let ID = $('#ID');
    let IDForm = ID.val();
    if (IDForm !== "") {
        ID.removeClass("is-invalid");
        ID.addClass("is-valid");
        return true
    } else if (IDForm === "") {
        ID.removeClass("is-valid");
        ID.addClass("is-invalid");
        return false
    }
}

function check_form_join() {

    if(check_name && check_id ){
        $("#welcome_form").submit();
    }
}

function check_form_start() {

    if(check_name_id){
        $("#welcome_form_2").submit();
    }
}

window.onload = function() {
    $( "#submit" ).click(function() {
        check_form();
    });
    $( "#button_id" ).click(function() {
        check_form_start();
    });
};
