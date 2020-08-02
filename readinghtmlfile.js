const http = require('http')
const fs = require('fs')

var request = ''
const server = http.createServer(function(req, res) {   
    request = req.url

    // the content type should be html
    res.writeHead(200, {'Content-Type': 'text/html'})
    let readStream = fs.createReadStream(__dirname + '/helloworld.html', 'utf8')
    readStream.pipe(res)
    
})

// server.listen(3000, '127.0.0.1')
