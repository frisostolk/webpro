$.getJSON( "../webpro/players.json", function( players ){
    var player1 = players[1].IP;
    var player2 = players[2].IP;
    alert(player2);
});