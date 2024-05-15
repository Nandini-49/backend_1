const dotenv = require("dotenv")
const mongoose= require("mongoose");
dotenv.config()
const connectionString = process.env.MONGO_URL;

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = ;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
//run().catch(console.dir);

//the problem we were facing was that we mixed both the ways of connecting to the database
// we connected using the monogdb model, but tried creating the table and the user with mongoose model
// therefore this mismatch led to failure in creating the user, as mongoose model did not exist at that point.


async function run() {
  try {
      await mongoose.connect(connectionString, {
          autoIndex: true
      })
      console.log('Connected to Mongodb Atlas');} catch (error) {
      console.error(error);
  }
}

run();

const userschema =mongoose.Schema({
  username: String,
  name: String,
  age: Number
})

module.exports=mongoose.model("User", userschema); 