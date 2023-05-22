const countriesController = require('express').Router();


countriesController.get('/getAllCountries',(req,res,next)=>{
    res.status(200).json({
        message: 'Rest countries api is under process',
        data:{
            name:'hemant',
            id:101,
            email:'hemantkishore98@gmail.com'
        }
    })
})

countriesController.post('/addCountry',(req,res,next)=>{
    console.log(req.body);
    res.status(200).json({
        message:'Working'
    })
})

module.exports = countriesController