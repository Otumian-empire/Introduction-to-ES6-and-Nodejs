// express - easy and flexible routing system which integrates easily with
// many templating engines and contains a middleware framework
// npm install express - installs the express package

// require express into the app
const express = require('express')

// create express app
const app = express()

// use app to set a view/template engine, we'd use ejs
// install ejs via npm, npm install ejs -save
app.set('view engine', 'ejs')


// express app has http methods that can help respond to requests
// http methods: GET, POST, PUT, DELETE

// responding to requests
// GET - app.get(route, callback)
// POST - app.post(route, callback)
// DELETE - app.delete(route, callback)

// app.get('/', function (req, res) {
//     // res.send(any: data) to return a response
//     res.send('This is the home page')
// })

// app.get('/contact', function (req, res) {
//     res.send('This is the contact page')
// })


// route paramters in express
// lets say we want to read a particular profile by id
// with the route, `/profile/23`, where 23 is the id
// the id can be accessed/read using req.params.id
// app.get('/profile/:id', function (req, res) {
//    res.send(`This is the profile page with id: ${req.params.id}`)
// })


// return html file
// use res.sendFile and pass the abspath of file
// app.get('/', function (req, res) {
//     res.sendFile(`${__dirname}/helloworld.html`)
// })

// the profile page, where we'd pass data and display it onto the html page
// create a folder called views and in views, create a file called profile.ejs
// this is basically something like an html file and so we can write html into it
// we will use res.render to display the view and not res.sendFile as we've done 
// so far, because, profile.ejs is created in a folder called view, it will be 
// seen as a view and not just any html file
// so we say res.render('profile') without the .ejs or .html
// any other data we want to pass to the view can be passed through an object,
// which is a second parameter after the view is passed
// apart from the paramter taken from the url, we can also pass data as well
app.get('/profile/:name', function (req, res) {

    res.render(`profile`, {
        name: req.params.name,
        title: `Hello ${req.params.name}`,
        hobbies: ['sleeping', 'coding', 'repeating', 'anime']
    })
})

app.get('/', function (req, res) {
    res.render(`index`, { title: "Home Page" })
})


app.get('/contact', function (req, res) {
    res.render(`contact`, { title: "contact Page" })
})


// list to a port, this was done with the server created from the http module
// where the port and host was passed
// server.listen(PORT, HOST)
app.listen(3000)
