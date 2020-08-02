const http = require('http')

var request = ''
const server = http.createServer(function (req, res) {
    request = req.url

    // the content type should be html
    res.writeHead(200, { 'Content-Type': 'application/json', 'methods':['POST', 'GET']})
    let myJsonData = {
        name: "Best node app",
        dev: "saitama dev",
        hope: "Wait"
    }
    res.end(JSON.stringify(myJsonData))

})

// server.listen(3000, '127.0.0.1')
