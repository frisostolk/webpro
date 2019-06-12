io.on('connection', (socket) => {
    console.log('a user connected:', socket.id);
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
});
const gameState = {
    players: {}
}