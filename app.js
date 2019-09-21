const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'parcel/dist', 'index.js'));
});

app.listen(3010, () => console.log("NET script served on port 3010 via http"))