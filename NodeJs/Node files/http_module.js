const http = require("http");

// Connection settings
// Port is the endpoint
const port = 3000;
// Hostname is the IP of the device which is connected to the computer network
const hostname = "127.0.0.1";

// Callback funciton when user makes a request to the server 
const respond = (request,response) => {
    console.log(request.url);
    // response.setHeader(headername, value)
    response.setHeader("content-type","text/plain");
    // Another way to create header with status code
    // response.writeHeader(statusCode,{header object}) (This takes precedence)
    response.writeHeader(200,{"content-type":"text/html"});
    response.write(`<!DOCTYPE html>
    <html>
    <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>    
    `);
    response.end(`</body>
    </html>`); // This marks the end of the response
};

// Create a server  
const server = http.createServer(respond);

// Listen to the user request
server.listen(port, hostname, ()=> {
    console.log("Listening ot the port");
});