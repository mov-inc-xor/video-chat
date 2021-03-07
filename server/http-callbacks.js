import Room from './models/room.js';

const createRoom = (req, res) => {
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
};

const getRoom = ((req, res) => {
  Room.findOne({token: req.params.token}, (err, doc) => {
    if (err) {
      console.log(err);
      return;
    }

    res.json(doc);
  });
});

export {createRoom, getRoom};