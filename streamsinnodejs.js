// streams
// wriatble streams - allows nodejs to write data to a stream
// readable streams - allows nodejs to read data from a stream
// duplex streamsz - allows nodejs to read/write to/from a stream

// this approach is better compared to the read/writeFile/Sync
const fs = require('fs')

// __dirname - returns the pwd of the current file
// --filename - returns the file name of the current file

// read stream
let readStream = fs.createReadStream(__dirname + '/dummy.txt', 'utf8')
let writeStrem = fs.createWriteStream(__dirname + '/writedummy.txt')
let c = 1

readStream.on('data', function (chunk) {
    console.log(c + ' new data')
    // console.log(chunk)
    c++
    writeStrem.write(chunk)
})

// a better or concurrent way will be to use pipes
// call the pipe on the readable stream
// I will just use the above readStream Object
// create a new write stream
let newWriteStream = fs.createWriteStream(__dirname + '/pipedummy.txt')
readStream.pipe(newWriteStream)

