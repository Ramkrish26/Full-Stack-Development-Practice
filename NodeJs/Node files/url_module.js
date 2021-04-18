const http = require("http");
const url1 = require("url");

const port = 3000;
const hostname = "127.0.0.1";
const cars = [
    {
        name : "BMW",
        model : "GL6",
        color : "Red"
    },
    {
        name : "Tata Altroz",
        model : "XZ",
        color : "Blue"
    },
    {
        name : "Kia sonet",
        model : "HET+",
        color : "White"
    }
]; 

const respond = (request,response) => {
    console.log(`Request url ${request.url}`); 
    const query = url1.parse(request.url,true).query;
    console.log(query);   
    const pathName = url1.parse(request.url,true).pathname;
    console.log(pathName);   
    response.setHeader("content-type","text/plain");
    response.writeHeader(200,{"content-type":"text/html"});
    response.write(`<!DOCTYPE html>
    <html>
    <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>  
    `);
    if(pathName === "/car"){
        const check = car => (query.name === undefined || query.name.toLowerCase() === car.name.toLowerCase())&&
        (query.model === undefined || query.model.toLowerCase() === car.model.toLowerCase())&&
        (query.color === undefined || query.color.toLowerCase() === car.color.toLowerCase());
        cars.filter(check).forEach(car => {
            response.write(`<p>Name : ${car.name}</p>
            <p>Model : ${car.model}</p>
            <p>Color : ${car.color}</p>`);
        });
    }
    response.end(`</body>
    </html>`); 
};

const server = http.createServer(respond);

server.listen(port, hostname, ()=> {
    console.log("Listening ot the port");    
});