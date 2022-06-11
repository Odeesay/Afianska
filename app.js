let http = require('http');
let host = '127.0.0.1';
let port = 3000;
let express = require('express');
let fs = require('fs');


let app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
    response.sendFile(__dirname + '/homepage.html');
});

app.get('/contact.html', function(request, response){
    response.sendFile(__dirname + '/contact.html');
    
});

app.get('/blogpage.html', function(request, response){
    response.sendFile(__dirname + '/blogpage.html');
    
});

app.post('/contact.html', function(req, res){
    fs.writeFileSync('pass.txt', `${req.body.usname} ${req.body.mail} ${req.body.msg}`);
});


app.listen(port, host);

console.log('Server is running on ' + port + ' port');