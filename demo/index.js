const express = require('express');
const App_Server = require('./appServer');
const node_server = express();

const port= 5000;
const hostname = 'localhost'

node_server.use('/api',App_Server)

node_server.listen(port,hostname,()=>{
   console.log('Server Started',port);
    
})
