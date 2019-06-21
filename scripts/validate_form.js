
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

function check_form() {

    if(check_name && check_id ){
        $("#welcome_form").submit();
    }
}

window.onload = function() {
    $( "#submit" ).click(function() {
        check_form();
        $.ajax({
            url: '../webpro/scripts/clear_match.php',
            type: 'POST',
            success: function (data)
            {
                console.log(data);
            }
        });
    });
    jQuery.ajax({
        url: 'https://geoip-db.com/json/',
        dataType: 'json' ,
        success: function( response ) {
            console.log( response.IPv4 ); // server response
        }
    });
};
