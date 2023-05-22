const express = require('express');
const countriesController = require('./Controller/Countries.controller');
const App_Server = express();
const Body_parser = require('body-parser')

App_Server.use(Body_parser.urlencoded({extended:true}));
App_Server.use(Body_parser.json());


App_Server.use('/countries',countriesController)


module.exports = App_Server