const stats = require("./data/stats.json");
const articles = require("./data/articles.json");

////// CLIENT CONFIGURATION //////
const { MongoClient } = require("mongodb")
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

// sending static articles.json and stats.json to database 
const batchImport = async(collectionName, dataArray) => {
    const client = new MongoClient(MONGO_URI, options)
    await client.connect()
    console.log("Client connected.")
    const db = client.db("Eunoia")  
    await db.collection(collectionName).insertMany(dataArray)
    client.close()
    console.log("Client disconnected.")
  }
  
  batchImport("stats", stats)
  batchImport("articles", articles)

