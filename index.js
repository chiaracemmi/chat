var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var broad = "nuovo utente connesso";









app.get('/', function(req, res){
  res.sendfile('index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function(socket){
  	io.emit('user connection', broad);
  	socket.on("typing", function(data) {  
    	io.sockets.emit("isTyping", {isTyping: data});
	});

  	socket.on('chat message', function(msg){
    	io.emit('chat message', msg);

  });
});



/*per disattivare il server node su terminale schiccio ctrl * c. per riattivarlo node index*/