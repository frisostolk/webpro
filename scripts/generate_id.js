$(function generate_id() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 6 characters
    // after the decimal.
    var ID = Math.random().toString(36).substr(2, 6);
    document.getElementById("id").innerHTML = String(ID);
});