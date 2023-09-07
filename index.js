const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
require("dotenv").config();

const fs = require('fs');

// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");


app.use(express.json());
app.use(cors());


// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.7pr7e.mongodb.net/?retryWrites=true&w=majority`;

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });



async function run() {
  try {
    // await client.connect();

 


  } finally {

    app.post("/data", async (req, res) => {
        const parts = req.body;
        console.log(parts);
        // const result = await partsCollection.insertOne(parts);
        // res.send(result);
      });
      app.get('/script', (req, res) => {
        // Read the JavaScript file
        fs.readFile('./popup-form.js', 'utf8', (err, data) => {
          if (err) {
            // Handle the error, e.g., file not found
            res.status(404).send('File not found');
          } else {
            // Set the appropriate content type for JavaScript
            res.setHeader('Content-Type', 'application/javascript');
            // Send the file content as the response
            res.send(data);
          }
        });
      });
      
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("manufacturers");
});

app.listen(port, () => {
  console.log(`Example app listening on port manufacturers ${port}`);
});
