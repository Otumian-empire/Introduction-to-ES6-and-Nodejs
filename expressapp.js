// express - easy and flexible routing system which integrates easily with
// many templating engines and contains a middleware framework
// npm install express - installs the express package

// require express into the app
const express = require('express')

// create express app
const app = express()

// express app has http methods that can help respond to requests
// http methods: GET, POST, PUT, DELETE

// responding to requests
// GET - app.get(route, callback)
// POST - app.post(route, callback)
// DELETE - app.delete(route, callback)

app.get('/', function (req, res) {
    // res.send(any: data) to return a response
    res.send('This is the home page')
})

app.get('/contact', function (req, res) {
    res.send('This is the contact page')
})


// route paramters in express
// lets say we want to read a particular profile by id
// with the route, `/profile/23`, where 23 is the id
// the id can be accessed/read using req.params.id
app.get('/profile/:id', function (req, res) {
    res.send('This is the profile page with id: ' + req.params.id)
})


// list to a port, this was done with the server created from the http module
// where the port and host was passed
// server.listen(PORT, HOST)
app.listen(3000)
