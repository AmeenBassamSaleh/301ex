'use strict';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT||8001;
// const DB = process.env.DATABASE_URL;

const apiData = require('./folder/apiData')
const crudData = require('./folder/cud')


mongoose.connect('mongodb://127.0.0.1:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('everything is working!')
});

// API proof of life addData
app.get('/data', apiData.apiDataa);

// create data
app.post('/data/any', apiData.addData);
app.get('/data/any', apiData.getData);
app.put('/data/any', apiData.updData);




app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});