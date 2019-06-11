function validateEmail(email) {
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
    jQuery.ajax({
        url: 'https://geoip-db.com/json/',
        dataType: 'json' ,
        success: function( response ) {
            console.log( response.IPv4 ); // server response
        }
    });
};