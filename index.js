const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const path = require('path')
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
    cors: {
        origin: "https://bachelorproef-b2b80.web.app/",
        methods: ["GET", "POST"]
    }
})
const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log('Server listening at port %d', port);
})

io.on('connection', (socket) => {

    socket.on('new message', (data) => {
        console.log('received')
        socket.broadcast.emit('resp', {
            username: 'NAME',
            message: 'OTHER'
        });
    })
})
