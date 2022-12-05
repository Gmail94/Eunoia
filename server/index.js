// CLIENT CONFIGURATION
const { MongoClient} = require("mongodb")
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  const { v4: uuidv4 } = require("uuid");

'use strict';
const PORT = 8000;
const express = require('express');
const bp = require('body-parser');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
	cors: {
		origin: 'http://localhost:3000',
	},
});

const morgan = require('morgan');
// const verifyUser = require('./handlers/verifyUser');

//import functions from handlers.js
const { getQuotes, 
        getMsg, 
        getEntries, 
        addTrigger, 
        addUser, 
        updateUser, 
        getUser, 
        getAllArticles, 
        getArticleById, 
        getAllStats
    } = require('./handlers');

//MIDDLEWARE
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static('public'));
app.use(bp.json());
app.use(bp.urlencoded({extended:true}));


//ENDPOINTS


//----CHAT BOT ENDPOINT------
app.get("/bot", getMsg)

let index = 0; //sets index at initial question in arr
let msgReceived = []; // puts questions and responses into an array 

app.post('/bot/entry', async (req, res) => {
    const qA = msgReceived.slice(2)
    
    const feedbackObj = {
        feedback:qA, // slices unwanted response from greeting
        email:req.body.email, 
        _id: uuidv4(), 
        date:new Date,
        trigger:false // intial value of false so when btn active will toggle to true
    };
   
    const client = new MongoClient(MONGO_URI, options)
    console.log(req.body)
    await client.connect()

    const db = client.db("Eunoia"); 

    const newEntry = await db.collection("entries").insertOne(feedbackObj);  // sends feedbackObj which is the info we need from chatbot data to database


    newEntry
    ? res.status(200).json({status:200, data: newEntry, message:"Entry added"})
    : res.status(400).json({status:400, message:"Entry not added"})

    client.close();
  }
);

// -----ZEN QUOTE ENDPOINT-----
app.get("/api/zenquotes", getQuotes)

// ----USER ENDPOINT-----
app.post("/user", getUser)
app.post("/newUser", addUser)
app.patch("/users",updateUser)

// -----ARTICLES ENDPOINT-----
app.get('/articles',getAllArticles)
app.get('/articles/:id', getArticleById)

//-----STATS ENDPOINT----
app.get("/stats", getAllStats)

//-----ENTRIES ENDPOINT----
app.get("/entries", getEntries)
app.patch("/trigger", addTrigger)

//404 ERROR
app.get('*', (req, res) => {
	res.status(404).json({
		status: 404,
		message: 'This is obviously not what you are looking for.',
	});
});

//SOCKET IO


// array of questions
const arr = ["Welcome to Eunoia Chat! In this chat you are able to answer a few questions to track your mental health which will then be posted onto your profile to keep track of. Think about it as your own diary. To continue, respond.",
            "On a numerical scale of 1 to 10 (1 being bad and 10 being great), how would you rate how you're feeling today?",
            "Thank you, Based on your day yesterday, is today a better day or worse day? " , 
            "Thank you, Referring to the last question, why was yesterday better or worse and what caused the change?"];

// Socket.io
io.on("connection", (socket) => {  // on: responsible for listening for incoming msgs / send data
    console.log(`User Connected: ${socket.id}`);
    
    socket.on("send_message", (data) => { // on: responsible for listening for incoming msgs 
        msgReceived.push({question:arr[index - 1], answer:data.message,});
        // console.log(index)
        // console.log(msgReceived)
        socket.emit('send_message', { //emit:responsible for sending messages / receive data 
            message: arr[index],
    })

    index++
    })
// runs on first mount -- intial message
    socket.emit('receive_message', { //emit:responsible for sending messages/ send data 
        message: "Hello!", 
        answer: 'first response'
})

	socket.on('disconnect', () => { // on: responsible for listening for incoming msgs / receive data 
        index = 0;
        msgReceived = [];
		console.log('user disconnected');
	});

});

//SET PORT -->8000

server.listen(PORT, (err) => {
	if (err) console.log(err);
	console.log(`Listening on port ${PORT}`);
});
