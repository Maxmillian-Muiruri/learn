const { on } = require('events');
const fs = require('fs');

const rs = fs.createReadStream('Read_Write_Files/files/loreim.txt', {encoding: 'utf8'});

const ws = fs.createWriteStream('Read_Write_Files/files/new-lorem.txt');

rs.on('data', (dataChunk) => {
    ws.write(dataChunk)
})