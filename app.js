const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/net-script', function(req, res) {
  res.sendFile(path.join(__dirname, 'parcel/dist', 'index.js'));
});
app.get('/net-style', function(req, res) {
  res.sendFile(path.join(__dirname, 'parcel/dist', 'index.css'));
});
app.get('/*', function(req, res) {
  res.send("NET festival 3d widget files on this port");
});

app.listen(3010, () => console.log("NET festival 3d widget files served on port 3010 via http"))