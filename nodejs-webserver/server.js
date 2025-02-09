const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');

    const { method } = request;

    response.statusCode = 200

    if (method === "POST") {
        response.end('<h1>Hai ini post</h1>')
    }
    if (method === "GET") {
        response.end('<h1>Hai ini get</h1>')
    }
    if (method === "PUT") {
        response.end('<h1>Hai ini put</h1>')
    }
    if (method === "DELETE") {
        response.end('<h1>Hai ini delete</h1>')
    }

    response.statusCode = 200;
    response.end('<h1>Hallo HTTP Server!</h1>')
}

const server = http.createServer(requestListener);

const host = 'localhost';
const port = 5000;

server.listen(port, host, () => {
    console.log(`Server sedang berjalan pada http://${host}:${port}`)
})