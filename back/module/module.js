'use strict';

class apiModel {
  constructor(data){

    this.name = data.name;
    this.img = data.img;
    this.gender = data.gender;

    this.description = data.psiPowers.description;
    this.name1 = data.psiPowers.name;
    this.img1 = data.psiPowers.img;
  }
}

module.exports = apiModel;

// gender img name 
// psiPowers ==> description img name

