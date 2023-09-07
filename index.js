const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
require("dotenv").config();
const fs = require('fs');

app.use(express.json());
app.use(cors());

async function run() {
  try {
    // await client.connect();
  } finally {

    app.get('/script', (req, res) => {
      // Read the JavaScript file
      fs.readFile('./popup-form.js', 'utf8', (err, data) => {
        if (err) {

          res.status(404).send('File not found');
        } else {

          res.setHeader('Content-Type', 'application/javascript');

          res.send(data);
        }
      });
    });

  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("displayPopupForm_server");
});

app.listen(port, () => {
  console.log(`displayPopupForm_server ${port}`);
});
