var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/gun', function(req, res){
  res.sendFile(__dirname + '/gun.html');
});

app.get('/target', function(req, res){
  res.sendFile(__dirname + '/target.html');
});

app.get('/crosshairs.png', function(req, res){
  res.sendFile(__dirname + '/crosshairs.png');
});

io.on('connection', function(socket){

  socket.on('coo', function(msg){
    io.emit('coo', msg);
  });

  socket.on('caliberright', function(msg){
    io.emit('caliberright', msg);
  });

  socket.on('caliberleft', function(msg){
    io.emit('caliberleft', msg);
  });

  socket.on('fire', function(msg){
    io.emit('fire', msg);
  });

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
