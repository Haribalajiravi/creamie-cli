const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const Server = {
    port: process.env.PORT || 8080,
    baseFile: process.env.BASE_FILE || 'index.html',
    start: function() {
        http.createServer(function(request, response) {
            let uri = url.parse(request.url).pathname;
            let filename = path.join(process.cwd(), uri);
            fs.exists(filename, function(exists) {
                if (!exists) {
                    filename = `dist/${Server.baseFile}`;
                } else if (fs.statSync(filename).isDirectory()) {
                    filename = `${filename}/dist/${Server.baseFile}`;
                }
                fs.readFile(filename, 'binary', function(err, file) {
                    if (err) {
                        response.writeHead(500, { 'Content-Type': 'text/plain' });
                        response.write(err + '\n');
                        response.end();
                        return;
                    }
                    response.writeHead(200);
                    response.write(file, 'binary');
                    response.end();
                });
            });
        }).listen(parseInt(Server.port, 10));
        console.log(`App listening on port ${Server.port}`);
    }
}

Server.start();