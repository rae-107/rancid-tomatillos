import React, { Component } from 'react'
import movieData from '../../movieData';
import Header from '../Header/Header'
import './App.css';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      error: '',
      movies: [],
      selectedMovie: ''
    }
  }

  componentDidMount() {
    this.setState({movies: movieData})
  }

  render() {
    return(
      <div>
        <Header />
        {  
        //Logo
            //Image

        //Slider
          //worst movies

        //Slider
          //other movies
        }

      </div>
    )
  }

}

export default App;