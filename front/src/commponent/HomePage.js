import React, { Component } from 'react'
import axios from "axios";


export class HomePage extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }


  apiData = async () => {
    const url = 'https://psychonauts-api.herokuapp.com/api/characters?limit=10'

    const dataFromApi = await axios.get(url)

    console.log(dataFromApi);
  }

  apiData = async () => {
    const url = 'https://psychonauts-api.herokuapp.com/api/characters?limit=10'

    const dataFromApi = await axios.post(url)

    console.log(dataFromApi);
  }
  render() {
   return (
    <div>
      <p>HomePage</p>
    </div>
  )
  }
}

export default HomePage
