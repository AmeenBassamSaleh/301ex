'use strict';

const mongo = require('../module/mongo');

const addData = async (req, res) => {
  const {
    gender,
    img,
    name,
    description,
    name1,
    img1
  } = req.body;
  mongo.find(({ name: name })(error, data => {
    if (data.length > 0) {
      res.send('the data in db');
    } else {
      const any = new mongo({
        gender: gender,
        img: img,
        name: name,
        description: description,
        name1: name1,
        img1: img1
      })
      any.save();
      res.send('add data ....................................')
    }
  })
  )
}


const getData = async (req, res) => {
  mongo.fing({}, (error, getData) =>
    res.send(data)
  )
}

const updData = async (req, res) => {
  const {
    gender,
    name
  } = req.body

  mongo.fing({ name: name }, (error, getData) =>{
    if (error) {
      res.send(error)
    }else{
      data[0].gender=gender;
      data[0].name=name;
      res.send(data)
    }
  })
}

const deletData = async (req, res) => {
  mongo.remove(({name:name}))
}



// gender img name 
// psiPowers ==> description img gender

module.exports = { addData, getData, updData };
