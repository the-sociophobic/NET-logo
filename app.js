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

[
  {
    url: "loader",
    fileName: "loader.gif",
  },
  {
    url: "easteregg-music",
    fileName: "Boards of Canada-Turquoise Hexagon Sun.mp3",
  },
  {
    url: "vk-logo",
    fileName: "vk.svg",
  },
  {
    url: "brook-video",
    fileName: "brook",
  },
  {
    url: "espinoza-video",
    fileName: "espinoza",
  },
  {
    url: "mitchel-video",
    fileName: "mitchel",
  },
  {
    url: "rau-video",
    fileName: "rau",
  },
  {
    url: "dimchev-video",
    fileName: "dimchev",
  },
  {
    url: "liddel-video",
    fileName: "liddel",
  },
  {
    url: "ukhanov-video",
    fileName: "ukhanov",
  },
  {
    url: "signa-video",
    fileName: "signa",
  },
]
.map(file => file.fileName.includes(".") ?
  ({
    ...file,
    location: 'parcel/public/static/media'
  })
  :
  ({
    ...file,
    fileName: file.fileName + ".gif",
    location: 'parcel/public/static/media/quiz-videos'
  })
)
.forEach(file => app
  .get("/net-" + file.url,
    (req, res) =>
      res.sendFile(path.join(__dirname, file.location, file.fileName))
  )
)

app.get('/*', function(req, res) {
  res.send("NET festival 3d widget files on this port");
});

app.listen(3010, () => console.log("NET festival 3d widget files served on port 3010 via http"))