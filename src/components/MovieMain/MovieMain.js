import './MovieMain.css'
import dayjs from 'dayjs'
import React, { Component } from 'react'
import Slider from '../Slider/Slider'

const MovieMain = (props) => {
  const { title, tagline, release_date, poster_path, overview, budget, revenue } = props.movie
  const { videos } = props
  console.log(budget, revenue)

  return (
    <section className="movie-info">
      <div className="overview-area">
        <div className='poster-section'>
          <img className= "poster" src={poster_path} alt={title}/>
          <div>
            <p className="tagline">{tagline}</p>
            <p className="deets movie-date">Released {dayjs(release_date).format('MMM D, YYYY')}</p>
            <p className="summary">{overview}</p>
          </div>
        </div>
        <div className="money-matters">
          {revenue !== 0 && (<p><strong>Revenue:</strong> {budget}</p>)}
          {budget !== 0 && (<p><strong>Budget:</strong> {revenue}</p>)}
      </div>
      </div>
      <Slider videos={videos}/>
    </section>
  )
}
//should overview area be its own component?

export default MovieMain