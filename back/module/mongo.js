'use strict';

const Mongoose = require("mongoose");


const dataSchema = Mongoose.Schema({

  gender: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true
  },
  img: String,
  name: String,

  psiPowers:[{
    img: String,
    description: String,
    name: String
  }]
})


const sch = mongoose.model('sch', dataSchema)

module.export = sch;
// name: name,
// name: name,



// gender img name 
// psiPowers ==> description img name
