const http = require('http');
const app = require ('./app')

const PORT=9008;
http.createServer(app).listen(PORT,()=>{
    console.log(`sever is running on port no ${PORT}`);
});