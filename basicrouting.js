const http = require('http')
const fs = require('fs')

// routes
// / || /home - returns index page
// /api - returns json data

const server = http.createServer(function (req, res) {
    console.log(req.url)

    switch (req.url) {
        case '/':
        case '/home':
        case '/home/':
            res.writeHead(200, { 'Content-Type': 'text/html' })
            fs.createReadStream(__dirname + '/helloworld.html').pipe(res)
            break
        case '/api':
        case '/api/':
            let myJsonData = {
                name: "Best node app",
                dev: "Saitama dev",
                hope: "Wait"
            }
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(myJsonData))
            break
        default:
            res.writeHead(400, { 'Content-Type': 'text/plain' })
            res.end("404 Error")
            break
    }
})


// server.listen(3000, '127.0.0.1')
console.log('server running')