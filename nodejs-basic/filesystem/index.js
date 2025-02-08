const fs = require('fs');

const readCallback = (error, data) => {
    if (error) {
        console.log("Can't read data");
        return;
        
    }

    console.log(data);
    
}

// Coba baca file
fs.readFile('filesystem/notes.txt', 'utf-8', readCallback);