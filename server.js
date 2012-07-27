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
    
//io.configure(function () {
//    io.set("transports", ["xhr-polling"]); 
//    io.set("polling duration", 10); 
//});



//app.get('*', function(req, res) {
//    console.log(req);
//    var filename = __dirname + '/public/index.html';
//    res.contentType(filename);
//    res.sendfile(__dirname + '/public/index.html');
//});

app.post('/ipad', function(req, res) {
    res.send('hello world');

//    console.log("post request data");
//    console.log(req.body);
    io.sockets.emit('output', req.body);
});

io.sockets.on('connection', function(socket) {
    
    // i shouldnt need to wait for a socket connection because im only using push updates
    
});