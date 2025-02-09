const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');

    const { method } = request;

    response.statusCode = 200

    if (method === "POST") {
        let body = [];

        request.on('data', (chunk) => {
            body.push(chunk);
        });

        request.on('end', () => {
            body = Buffer.concat(body).toString();
            const { name } = JSON.parse(body);
            response.end(`<h1>Hai, ${name}!</h1><br>\n`);
        });
    }
    if (method === "GET") {
        response.end('<h1>Hai ini get</h1>')
    }
}

const server = http.createServer(requestListener);

const host = 'localhost';
const port = 5000;

server.listen(port, host, () => {
    console.log(`Server sedang berjalan pada http://${host}:${port}`)
})