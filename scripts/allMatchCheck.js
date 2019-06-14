// if all cards have been matched this detects it and will stop the game and show the modal
var flag = true;
// looks in section and loops through all divs with class = 'card'
$('section ').find('div.card').each(function(){
    // if a .card does not have class = 'match' flag will change to false
    if(!$(this).hasClass('match'))
        flag = false;
});
// if flag is true that means that all cards have class = 'match' and the popup shows
if(flag){
    console.log("all have match");
    $("#timer").hide();x
    // Get the modal
    var modal = document.getElementById("endGameModal");

    // Get the <span> element that closes the modal
    var button = document.getElementsByClassName("close")[0];

    // Show the modal
    modal.style.display = "block";

    // When player clicks on button, player is redirected to the homepage
    button.onclick = function() {
        window.location = 'http://siegfried.webhosting.rug.nl/~s3782808/webpro/index.php'
    };
}
else {
    console.log("not all have match")
}
