// file-system.js  
const fs = require('fs');  

// Create welcome.txt  
fs.writeFileSync('welcome.txt', 'Hello Node');  

// Read from hello.txt (make sure this file exists with some content)  
fs.readFile('hello.txt', 'utf8', (err, data) => {  
    if (err) {  
        console.error('Error reading file:', err);  
        return;  
    }  
    console.log(data);  
});