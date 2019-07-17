const https = require('https');
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const fs = require('fs');

//static files
app.use(express.static(path.join(__dirname,'/template')));

//middlewares
app.use(cors({ origin: '*'}));

https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app).listen(3000, () => {
    console.log('Eagle fly free...')
  })



// app.listen(3000, () => {
//     console.log("server on port 3000");
// })