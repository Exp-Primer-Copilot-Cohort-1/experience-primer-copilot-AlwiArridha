// Create web server
// npm install express
// npm install body-parser

// Load the express module
var express = require('express');
// Load the body-parser module
var bodyParser = require('body-parser');

// Create an express app
var app = express();

// Use the body-parser module
app.use(bodyParser.json());

// Create an array of comments
var comments = [];

// Create a GET route that returns all comments
app.get('/comments', function(request, response) {
    response.json(comments);
});

// Create a POST route that adds a comment
app.post('/comments', function(request, response) {
    var comment = request.body;
    comments.push(comment);
    response.json(comment);
});

// Start the web server on port 3000
app.listen(3000, function() {
    console.log('Server is listening on port 3000');
});
