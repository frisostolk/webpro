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

            // Get the modal
            var modal = document.getElementById("endGameModal");

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // Show the modal
            modal.style.display = "block";

            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
                modal.style.display = "none";
            };

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            };

        }
    }, 1000);
}

window.onload = function () {
    var twoMinutes = 60 * 0.05,
        display = document.querySelector('#time');
    startTimer(twoMinutes, display);
};