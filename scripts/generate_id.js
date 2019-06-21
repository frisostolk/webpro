$(function click_id(){
    // Function that makes sure the function generate id is executed when the button is clicked.
    document.getElementById("button").onclick = function() {generate_id()};
    }
);

function generate_id() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    var ID = Math.random().toString(36).substr(2, 6);
    document.getElementById("id").innerHTML = String(ID);
}
