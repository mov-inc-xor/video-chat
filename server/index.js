const express = require('express');
const mongoose = require('mongoose');
// const path = require('path');
const bodyParser = require('body-parser');

const uri = 'mongodb+srv://admin:admin@cluster0.ehrca.mongodb.net/video-chat?retryWrites=true&w=majority';
// TODO OPTIONS
mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true});

const Room = require('./models/room');

const app = express();

app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '../build')));

app.post('/api/room', (req, res) => {
  const meetingName = req.body.meetingName;

  if (meetingName === undefined || meetingName.trim() === '') {
    res.json({
      error: 'Empty meeting name'
    });
    return;
  }

  const generateRandomString = (length = 4) => Math.random().toString(20).substr(2, length);

  const token = `${generateRandomString()}-${generateRandomString()}-${generateRandomString()}`;

  const room = new Room({
    name: meetingName,
    token,
  });

  room.save(function (err) {
    if (err) {
      console.log(err);
    }
  });

  res.json({
    token
  });
});

app.get('/api/room/:token', ((req, res) => {
  Room.findOne({token: req.params.token}, (err, doc) => {
    if (err) {
      console.log(err);
      return;
    }

    res.json(doc);
  })
}))

const port = process.env.PORT || 5000;

app.listen(port);

console.log('Server is listening on port ' + port);

process.on('SIGINT', function(){
  mongoose.connection.close(function(){
    console.log("Mongoose default connection is disconnected due to application termination");
    process.exit(0)
  });
});