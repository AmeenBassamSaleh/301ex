'use strict';

const superagent = require('superagent');

const model = require('../module/module')


const apiDataa = async (req, res) => {

  url = 'https://psychonauts-api.herokuapp.com/api/characters?limit=10'

  superagent.get(url).then(data => {
    const dataReq = data.body.map (i=>{
      const dataFromApiCaricter = new model(i);
    })
    console.log(dataFromApiCaricter);

    res.send('api data')
  })
}

module.export = apiDataa;
