// server.js  
const http = require('http');  

const server = http.createServer((req, res) => {  
    res.statusCode = 200; // Set HTTP status  
    res.setHeader('Content-Type', 'text/html');  
    res.end('<h1>Hello Node!!!!</h1>\n'); 
});  

const PORT = 3000;  
server.listen(PORT, () => {  
    console.log(`Server running at http://localhost:${PORT}/`);  
});