const fs = require('fs');

if (!fs.existsSync('./new', )){
    fs.mkdir('./new',(err) => {
        if (err) console.log(err);
        console.log('Directory created')
    });


}

if (fs.existsSync('./new', )){
    fs.rmdir('./new',(err) => {
        if (err) console.log(err);
        console.log('Directory removed')
    });


}