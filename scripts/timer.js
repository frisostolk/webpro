function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        // If the time is up a modal pops up with the scores etc.
        if (--timer < 0) {
            $("#timer").hide();
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
    }, 1000);
}

window.onload = function () {

    var tenMinutes = 60 * 10,

        display = document.querySelector('#time');
    startTimer(tenMinutes, display);
};
