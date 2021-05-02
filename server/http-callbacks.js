const createRoom = (req, res) => {
  const generateRandomString = (length = 4) => Math.random().toString(20).substr(2, length);

  const token = `${generateRandomString()}-${generateRandomString()}-${generateRandomString()}`;

  res.json({
    token
  });
};

export {createRoom};