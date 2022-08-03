const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs')

// middleware = code between request and response
// the css is not loading - static file
// use app.use('/static_file_dir', function(req, res, next) {next()})
// , which will load the static files.
// css is in /assets
// app.use('/assets', function(req, res, next) {
//     console.log(req.url)
//     next()
// })
// instead of the above we'd best use express middleware for this
app.use('/assets', express.static('assets'))

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


// query strings: /home/?name=someName&pet=rufussa
// these are name=someName, pet=rufussa
// request.query returns an object of the query string

app.get('/contact', function (req, res) {
    res.render(`contact`, { title: "contact Page", qs: req.query })
})

// so far we used the req to handle the query string but for a post request,
// we need another middleware, called the body-parser then we'd use req.body
//  to get the post data
// npm install body-parser -save, installs body-parser
// use post method since this is a post method
app.post('/contact', urlencodedParser, function (req, res) {
    res.render(`contact-success`, { title: "contact-success Page", data: req.body })
})

// app.listen(3000)
