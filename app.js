var express = require("express");
var request = require("request");
var app = express();
app.get('/', function(req, res){
    // var query = 'Harry Potter';
    var query = 'Twilight';
    var url = 'https://www.omdbapi.com/?s=' + query + '&apikey=1ef32cde';
   // console.log(url);
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.send(data['Search'][0]['imdbID']);
        }
    });
});

module.exports = app;