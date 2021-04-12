const app = require('express');
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
    cors: true,
    origins: ["*"]
});

io.on("connection", (socket) => {
    console.log("a user connected");
    socket.emit('message','hey I just Connected');
    socket.broadcast.emit('message',"hi this is for all except sender");
    io.emit("this is send to everyone");
    socket.join("here is a uniqur id for the room");
    socket.to("unique id").emit("message","This will be sent to everyone in the room except the sender");
    io.to("UNIQUE ID").emit("message","this message will be send to every one in the room");
});

const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () => console.log('Server is running on port ' + PORT));