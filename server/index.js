const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const { getQuotes, getMsg } = require('./handlers')
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const cors = require("cors");
const io = new Server(server, {
    cors: {
        origin:"http://localhost:3000", 
        methods:["GET", "POST"],
    },
})

const port = 8000;


// Socket.io
io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("send_message", (data) => {
        socket.emit("receive_message", data)
    })
});



express()

    .use(express.json())
    .use(helmet())
    .use(morgan('tiny'))
    .use(cors())


// -----ZEN QUOTE ENDPOINT-----
.get("/api/zenquotes", getQuotes)


.get("/bot", getMsg)


// this is our catch all endpoint.

    .get("*", (req, res) => {
        res.status(404).json({
        status: 404,
        message: "This is obviously not what you are looking for.",
        });
    })

server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})