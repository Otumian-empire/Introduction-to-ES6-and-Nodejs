const http = require('http')
const fs = require('fs')

var request = ''
const server = http.createServer(function(req, res) {   
    request = req.url
    res.writeHead(200, {'Content-Type': 'text/plain'})
    let readStream = fs.createReadStream(__dirname + '/dummy.txt', 'utf8')
    readStream.pipe(res)
    
})

// server.listen(3000, '127.0.0.1')
console.log('listening to server: ' + request)