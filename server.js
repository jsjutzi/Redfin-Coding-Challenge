const photos = require( "../gallery-challenge/data/photos");
const express = require('express');
const path = require('path');
const app = express();

const port = 3001;

app.use(express.static(`${__dirname}`));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/photos', (req, res) => {
  console.log(photos, 'server side');
  res.send(JSON.stringify(photos));
});

app.listen(port, () => console.log(`listening at port ${port}`));