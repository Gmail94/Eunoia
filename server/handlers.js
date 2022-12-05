"use strict"
// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

// CLIENT CONFIGURATION
const { MongoClient} = require("mongodb")
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

const request = require("request-promise");
const e = require("express");


// ------ZEN QUOTE HANDLERS-------

// GETS a random quote from the API
const getQuotes = async (req, res) => {
    try {
      const response = await request("https://zenquotes.io/api/random"); 
      const parsedResponse = JSON.parse(response);
      res.status(200).json({ status: 200, data: parsedResponse });
      // console.log(parsedResponse) 
    } catch (err) {
      res.status(500).json({ status: 500, message: err.message });
    }
  };

  //------CHATBOX HANDLERS------

  // chat bot GET msg 
  const getMsg = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options)
    const email = req.body;

    await client.connect()

    const db = client.db("Eunoia");

    const getEntry = await db.collection("entries").findOne({email:email});

    getEntry
    ? res.status(200).json({status:200, data:getEntry, message:"Success"})
    : res.status(400).json({status:400, message:"No entry to retrieve"})

    client.close();
  };

  // GET all entries 
  const getEntries = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options)
    const email = req.body;
    
    await client.connect()

    const db = client.db("Eunoia");

    const entry = await db.collection("entries").find({}).toArray(); 

    entry
    ? res.status(200).json({status:200, data: entry, message:"Success"})
    : res.status(400).json({status:400, message:"Unable to retrieve entry"})

    client.close();

  }; 

  //PATCH trigger key 
  const addTrigger = async(req,res) => {
    const client = new MongoClient(MONGO_URI, options);
    let trigger = req.body.trigger;
    const Id = req.body._id;
    console.log(req.body)
    
    try{
      await client.connect();
      
      const db = client.db("Eunoia"); 
      
      const modifyEntry = await db.collection("entries").updateOne({_id: Id
      }, {$set:{
        "trigger": trigger, 
      }})
      console.log(modifyEntry)
      
    res.status(200).json({status:200, data:modifyEntry, message:"Trigger added"}) 
    } catch(err){
      res.status(404).json({status:400, data: req.body , message:"Entry not updated"})
    } finally{
      client.close()
    }
  }

//------USER HANDLERS-----

  // POST user to database
  const addUser = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    
    await client.connect();
    
    const db = client.db("Eunoia");
    // console.log("connected!");

    // const {name} = req.body;
    const newUser = await db.collection("users").insertOne({...req.body.user, bio:""});
    
    newUser
    ? res.status(200).json({status:200, data:newUser, message:"User added"})
    : res.status(400).json({status:404, message:"User not added"})
    
    // close the connection to the database server
    client.close();
    // console.log("disconnected!");
};

// PATCHES user's nickname and bio 
const updateUser = async(req,res) => {
  const client = new MongoClient(MONGO_URI, options);
  let userDetails = req.body;
  const Id = req.body.email;
 
  
  try{
  await client.connect();

  const db = client.db("Eunoia"); 

  const modifyUser = await db.collection("users").updateOne({email: Id
  }, {$set:{
    "nickname": userDetails.nickname, 
    "bio": userDetails.bio,
  }})
  console.log(modifyUser)
  res.status(200).json({status:200, data:modifyUser}) 
  } catch(err){
    res.status(404).json({status:400, data: req.body , message:"User not updated"})
  } finally{
    client.close()
  }
}

// GETS user
const getUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const email = req.body.email;

  try {
    await client.connect();

    const db = client.db("Eunoia"); 

    const grabUser = await db.collection("users").findOne({email:email})
   
    if(grabUser){
      res.status(200).json({status:200, data:grabUser, message:"User created"})
      //create user
    } else{
      res.status(404).json({status:400, data: email , message:"User does not exist"})
    } } catch(err){
      res.status(404).json({status:400, data: email , message:"User does not exist"})
  } finally {
    client.close()
  }
};


// -------ARTICLE HANDLERS-------

// function that GETs all articles from database 
const getAllArticles = async (req,res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
      // connect to database    
      await client.connect(); 
      // console.log("Connected")
      const db = client.db("Eunoia")
      // get all items from database
      const data = await db.collection("articles").find({}).toArray();
      
      (data.length > 0) ?
      // send data
      res.status(200).send({ status: 200, data: data, message: "Success" }) :
      // send error message
      res.status(404).send({ status: 404, message: "Not found" })
  } catch(err) {
      console.log(err)
  } finally {
      // disconnect from database 
      client.close();
      // console.log("Disconnected")
  }
};

// function that GETs one article based on its id from the database 
const getArticleById = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  // get itemId using params
  const itemId = req.params.id;

  try {
      // connect to database 
      await client.connect();
      // console.log("Connected")
      const db = client.db("Eunoia")

      // find item by id 
      const data = await db.collection("articles").findOne({"_id": itemId})

      data !== null ?
      res.status(200).send({ status: 200, data: data, message: "Success" }) :
      res.status(404).send({ status: 404, itemId, message: "Invalid item id" })
  } catch(err) {
      console.log(err)
  } finally {
      // disconnect from database 
      client.close();
      // console.log("Disconnected")
  }
};

// ------STAT HANDLER-------

const getAllStats = async (req,res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
      // connect to database    
      await client.connect(); 
      // console.log("Connected")
      const db = client.db("Eunoia")
      // get all items from database
      const data = await db.collection("stats").find({}).toArray();
      
      (data.length > 0) ?
      // send data
      res.status(200).send({ status: 200, data: data, message: "Success" }) :
      // send error message
      res.status(404).send({ status: 404, message: "Not found" })
  } catch(err) {
      console.log(err)
  } finally {
      // disconnect from database 
      client.close();
      // console.log("Disconnected")
  }
};

module.exports = {
    getQuotes,
    getMsg,
    getEntries,
    addTrigger, 
    addUser, 
    updateUser,
    getUser, 
    getAllArticles, 
    getArticleById,
    getAllStats
}