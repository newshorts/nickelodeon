var fs = require('fs'),
    express = require('express'),
    app = express.createServer(express.logger()),
    io = require('socket.io').listen(app);
    
var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
    
io.configure(function () {
    io.set("transports", ["xhr-polling"]); 
    io.set("polling duration", 10); 
});

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});

app.get('/ipad', function(req, res) {
    // this is where I forward message from ipad to the rest of the application
    
    console.log(req);
    // io.sockets.emit();
});

app.post('/ipad', function(req, res) {
    console.log(req);
});

io.sockets.on('connection', function(socket) {
    
    // i shouldnt need to wait for a socket connection because im only using push updates
    
});