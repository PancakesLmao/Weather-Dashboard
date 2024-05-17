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
        const data = await Model.find().sort({_id:-1}).limit(2000);
        console.log(data);
        res.json(data);
    }
    catch(error){{
        res.status(500).json({message: error.message});
    }}
    
})

//  Get Wind Chart Data
router.get('/getWindChartData', async (req,res) => {

    try{
        const data = await Model.aggregate([
            {
                $group: {
                  _id: "$recordDate",
                  totalWindSpeed: { $sum: "$avgWindSpd" },
                  maxWindSpeed:{$max:"$mxWindSpd"},
                  count: { $sum: 1 } // Count the number of documents in each group
                }
              },
              {
                $project: {
                  _id: 1, 
                  avgWindSpeed: { $divide: ["$totalWindSpeed", "$count"] }, // Calculate average wind speed
                  maxWindSpeed: "$maxWindSpeed"
                }
              }
        ]).sort({_id:1})

        res.json(data);
    } 
    catch (err){
        console.error("Error retrieving daily average wind speed", err);
        res.status(500).send("Error retrieving data from MongoDB");
    }

})

//  Get Rain Chart Data
router.get('/getRainChartData', async (req,res) => {

    try{
        const data = await Model.aggregate([
            {
                $group: {
                  _id: {$month: {$toDate: "$recordDate"}}, //Extract month from recordDate
                  totalRainPerDay: { $sum: "$rainPerDay" },
                  maxRainPerDay: {$max: "$rainPerDay"},
                  count: { $sum: 1 } // Count the number of documents in each group
                }
              },
              {
                $addFields: {
                    monthName: {
                        $arrayElemAt:[
                            [
                                "January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"
                            ],{$subtract: ["$_id", 1]}
                        ] 
                    }
                }
              },
              {
            
                $sort: {
                  _id: 1 // Sort by _id in ascending order
                }
          },
              {
                $project: {
                  _id: "$monthName", 
                  avgRainPerMonth: { $divide: ["$totalRainPerDay", "$count"] }, // Calculate average wind speed
                  maxRainPerMonth: "$maxRainPerDay"
                }
              },
              
        ])

        res.json(data);
    } 
    catch (err){
        console.error("Error retrieving daily average wind speed", err);
        res.status(500).send("Error retrieving data from MongoDB");
    }

})

module.exports = router; 