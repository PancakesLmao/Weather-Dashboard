const express = require('express');
const Model = require('../models/WeatherData');

const router = express.Router();

//Get Current
router.get('/getCurrent', async (req,res) => {
    try{
        const data = await Model.find().limit(1).sort({_id: -1});
        console.log(data);
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

//Get All
router.get('/getAll', async (req,res) => {
    try{
        const data = await Model.find().sort({_id:-1});
        console.log(data);
        res.json(data);
    }
    catch(error){{
        res.status(500).json({message: error.message});
    }}
    
})

module.exports = router;