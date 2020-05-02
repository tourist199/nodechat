var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

const port = 6600;

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

const emitVisitors = () => {
    io.emit('visitors', getVisitors())
}

io.on("connection", function(socket){
    console.log('a user connected');
    
    socket.on('new_visitor', user => {
        console.log('new_visitor', user);
        socket.user = user
        emitVisitors()
    })

    socket.on('disconnect', function(){
        console.log('user disconnected');
    })
})

http.listen(port, () => {
    console.log(`listening on :${port}`);
})