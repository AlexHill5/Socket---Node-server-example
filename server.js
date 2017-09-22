const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const socketIo = require("socket.io");
const http = require('http')

// make sure you import the things apove ^



//make app = express
const app = express();
//then wrap server in your http.createServer
var server = http.createServer(app)
//set io to socketIo wiht the server
const io = socketIo(server);


//have the server listening just like normal
server.listen(4000, console.log('listening on 4000'))


// Below is the sockets from my personal as a reference

// io.on("connection", socket => {
//     console.log('socket connected')
//     connections.push(socket);

//     socket.on('room', data => {
//         socket.join(data.id);
//         roomid[data.id] = {}
//         console.log(`joined room ${data.id}`)
//         console.log(roomid, 'room array')
//     })

//     socket.on('leave room', data => {
//         socket.leave(data)
//         delete roomid[data]
//         console.log('TERMINATED ROOM')
//         console.log(roomid, 'spliced roomid')
//     })
// socket.on("Scorebot", (matchId) => {
//     console.log(matchId, 'match id')
//     HLTV.default.connectToScorebot({id: matchId, onScoreboardUpdate: (score) => {
//         if ( roomid.hasOwnProperty(matchId) ){
//             io.to(matchId).emit('live-scores', {score: score, id: matchId})
//         } else return null
//             }, onLogUpdate: (score) => {
//         if ( roomid.hasOwnProperty(matchId) ){
//             io.to(matchId).emit('game-log-updates', {score: score, id: matchId})
//         }
//             }})
// })

//     socket.on('disconnect', function () {
//         console.log('asdlfjasdf')
//     connections.splice(connections.indexOf(socket), 1);
//      });

//     socket.on('end the socket', () => {
//         connections.splice(0,1)
//     })
// })