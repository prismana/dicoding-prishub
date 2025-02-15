const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('Powered-By', 'Node-js');

    const {method, url} = request;

    // response.statusCode = 200

    // Route ke '\'
    if (url === '/') {
        if (method === 'GET') {
            response.statusCode = 200
            response.end('<h1>Ini adalah homepage</h1>')
        } else {
            response.statusCode = 400
            response.end(`<h1>Halaman tidak dapat di akses dengan ${method} request </h1>`)
        }
    } // route about
    else if (url === '/about') {
        if (method === "POST") {
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.statusCode = 200
                response.end(`<h1>Hai, ${name}! ini adalah halaman about</h1><br>\n`);
            });
        } else if (method === "GET") {
            response.statusCode = 200;
            response.end('<h1>Halo! ini ini adalah halaman about</h1>')
        } else {
            response.statusCode = 400
            response.end(`<h1>Halaman tidak dapat di akses dengan ${method} request </h1>`)
        }
    }
    // Respon url any, selain / dan /about
    else {
        response.statusCode = 404
        response.end('<h1>Halaman tidak ditemukan</h1>')
    }

}

const server = http.createServer(requestListener);

const host = 'localhost';
const port = 5000;

server.listen(port, host, () => {
    console.log(`Server sedang berjalan pada http://${host}:${port}`)
})