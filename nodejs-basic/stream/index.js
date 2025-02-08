const fs = require('fs');

// membuat objek masing-masing read dan write stream
const readStream = fs.createReadStream('./stream/input.txt', {
    highWaterMark: 15,
});
const writeStream = fs.createWriteStream('./stream/output.txt');

// Baca stream
readStream.on('readabl', () => {
    try {
        writeStream.write(`${readStream.read()}\n`);
    } catch(e) {
        console.log(e);
    }
});

// Event selesai baca dipanggil pakai callback saat write selesai
readStream.on('end', () => {
    writeStream.end();
})
