var express = require('express');

var app = new express();

//set your templating engine
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('./../app/views/pages/index.ejs',{});
});

app.listen(7777);