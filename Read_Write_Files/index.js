const fs = require('fs');
//read the contents of a file
 fs.readFile('./files/starter.txt', (error, data) => {
     if (error) console.log(error);; 
     console.log(data); 

    })