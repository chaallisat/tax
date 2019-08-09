const http = require("http");
const fs = require("fs");

const PORT = 8080;

const server = http.createServer(handleRequest);

function handleRequest(req, res) {

    // Capture the url the request is made to
    const path = req.url;

    // Depending on the URL, display a different HTML file.
    switch (path) {

        case "/":
        // return displayRoot(path, req, res);
        case "/food":
        // return displayFood(path, req, res);
        case "/css":
        // return displayCSS(path, req, res);

        case "/movies":
            // return displayMovies(path, req, res);
            return serveHTML(`${path}.html`, res);


        default:
            return serveHTML("/index.html", res);
    }
    // Here we use the fs package to read our index.html file


}

const serveHTML = (filePath, res) => {
    return fs.readFile(__dirname + filePath, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-type": "text/html" });
        res.end(data);
    })
}

function displayRoot(url, req, res) {

    fs.readFile(__dirname + "/index.html", function (err, data) {

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayFood(url, req, res) {

    fs.readFile(__dirname + "/food.html", function (err, data) {

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayMovies(url, req, res) {

    fs.readFile(__dirname + "/movies.html", function (err, data) {

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayCSS(url, req, res) {

    fs.readFile(__dirname + "/cssFrameworks.html", function (err, data) {

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function display404(url, req, res) {
    const myHTML = "<html>" +
        "<body><h1>404 Not Found </h1>" +
        "<p>The page you were looking for: " + url + " can not be found</p>" +
        "</body></html>";

    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(myHTML);
}

server.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});