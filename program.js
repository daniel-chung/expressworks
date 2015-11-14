// 1
/*var express = require('express');
var app = express();
app.get('/home', function(req, res) {
  res.end('Hello World!\n');
});
app.listen(process.argv[2]);
*/


//2 
/*var port = process.argv[2];
var index = process.argv[3];
var express = require('express');
var app = express();
app.use(express.static(index || path.join(__dirname, 'public')));
app.listen(port);
*/

//3
/*var port = process.argv[2];
var index = process.argv[3];
var express = require('express');
var app = express();
app.set('view engine', 'jade');
app.set('views', index);
app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()});
});
app.listen(port);
*/

//4
/*var port = process.argv[2];
var express = require('express');
var bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.urlencoded({extended: false}));
app.post('/form', function(req, res) {
  res.end(req.body.str.split('').reverse().join(''));
});
app.listen(port);
*/

// 5
/*var port = process.argv[2];
var dir = process.argv[3];
var stylus = require('stylus');
var express = require('express');
var app = express();
app.use( stylus.middleware(__dirname + '/public') );
app.use( express.static(dir || path.join(__dirname, 'public') ) );
app.listen(port);
*/

// 6
/*var port = process.argv[2];
var cryp = require('crypto');
var express = require('express');
var app = express();

app.put('/message/:id', function(req, res) {
  res.end( cryp
             .createHash('sha1')
             .update(new Date().toDateString() + req.params.id)
             .digest('hex')
          );
});
app.listen(port);
*/

// 7
/*var port = process.argv[2];
var express = require('express');
var app = express();

app.get('/search', function(req, res) {
  res.send(req.query);
});
app.listen(port);
*/

// 8
var port = process.argv[2];
var file = process.argv[3];
var fs = require('fs');
var express = require('express');
var app = express();

app.get('/books', function(req, res) {
  fs.readFile(file, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    res.send(JSON.parse(data));
  })
});
app.listen(port);











