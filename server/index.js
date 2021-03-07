import express from 'express';
// import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './router.js'
import listen from "./sockets.js";
import {createServer} from "http";
import {Server} from "socket.io";

const port = process.env.PORT || 5000;

// const uri = 'mongodb+srv://admin:admin@cluster0.ehrca.mongodb.net/video-chat?retryWrites=true&w=majority';
// TODO OPTIONS
// mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true});

const app = express();

app.use(bodyParser.json());
app.use('/api', router);

const server = listen(app);

server.listen(port, () => {
  console.log('Server is listening on port ' + port);
})


// process.on('SIGINT', function(){
//   mongoose.connection.close(function(){
//     console.log("Mongoose default connection is disconnected due to application termination");
//     process.exit(0)
//   });
// });