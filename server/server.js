require('dotenv').config();

const mongoString = process.env.DATABASE_URL;

const routes = require('./routes/routes');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect(mongoString);
const db = mongoose.connection;

db.on('error', (error) => {
    console.log(error);
})

db.once('connected', () => {
    console.log("Database Connected!");
})

const app = express();
app.use(cors());


app.use('/api', routes)
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`);
})