var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

const port = 6800;

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
})

const getVisitors = () => {
    let clients = io.sockets.clients().connected
    let sockets = Object.values(clients)
    let users = sockets.map(s => s.user)
    console.log('get visitors');
    
    return users
}

io.on("connection", function(socket){
    console.log('a user connected');

    socket.on('join_room', room => {
        socket.join(room)
    })

    socket.on('message', ({room, message}) => {
        socket.to(room).emit('message', {
            message,
            name: 'Friend'
        })
    })

    socket.on('typing', ({room}) => {
        socket.to(room).emit('typing', 'Someone is typing')
    })

    socket.on('stop_typing', ({room}) => {
        socket.to(room).emit('stop_typing')
    })
    
})

http.listen(port, () => {
    console.log(`listening on :${port}`);
})