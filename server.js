const modules = require("./modules");
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write("Welcome to the calculator application\n");
    res.write("The addition of 4 and 2 is "+modules.add(4,2).toString()+'\n');
    res.write("The subtraction of 4 and 2 is "+modules.sub(4,2).toString()+'\n');
    res.write("The multiplication of 4 and 2 is "+modules.mul(4,2).toString()+'\n');
    res.write("The division of 4 and 2 is "+modules.divide(4,2).toString()+'\n');
    res.end('Thank you!!\n')
})
server.listen(3000,()=>{
    console.log('server is running on port http://localhost:3000')
})