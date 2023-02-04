import './MovieHeader.css'
import React, { Component } from 'react'

movie: {
  id: 1, 
  title: "Fake Movie Title", 
  poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", 
  backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", 
  release_date: "2019-12-04", 
  overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", 
  average_rating: 6, 
  genres: ["Drama"], 
  budget:63000000, 
  revenue:100853753, 
  runtime:139, 
  tagline: "It's a movie!" 
}

const MovieHeader = (props) => {
  const { title, backdrop_path, rating, release_date, budget, revenue} = props.movie

  return (
    <nav className="movie-header">
      <div>
        <p className="deets movie-title"></p>
        <p className="deets movie-rating"></p>
        <p className="deets movie-date"></p>
      </div>
      <div>
        <button onClick={props.backToMain}>Back to All Movies</button>
        <div>
          <p>Revenue: </p>
          <p>Budget: </p>
        </div>
      </div>
    </nav>
  )
}