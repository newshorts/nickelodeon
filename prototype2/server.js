var fs = require('fs'),
    express = require('express'),
    app = express.createServer(express.logger()),
    io = require('socket.io').listen(app);
    
var port = process.env.PORT || 5000;

app.use('/', express.static(__dirname + '/public'));
app.use(express.bodyParser());
app.use(app.router);

app.listen(port, function() {
    console.log("Listening on " + port);
});

app.post('/ipad', function(req, res) {
    res.send('hello world');
    io.sockets.emit('output', req.body);
});

app.post('/splat', function(req, res) {
    res.send('hello world');
    io.sockets.emit('splat', req.body);
});

io.sockets.on('connection', function(socket) {
    
    // do nothing
    
});