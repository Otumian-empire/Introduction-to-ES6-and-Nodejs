const http = require('http')

// request = request + request headers
// response = response + response headers

const server = http.createServer(function (req, res) {
    console.log(`requrst made: ${req.url}`);

    // takes a response and a content type
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('request body')
})

// listen to host on port
server.listen(3000, '127.0.0.1')

console.log('server running')