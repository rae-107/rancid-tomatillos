import dayjs from 'dayjs'

const scrubbingBubbles = (data, destination) => {
  if(destination === 'main') {
    return data
      .map(movie => {
        return {
          id: movie.id,
          poster_path: movie.poster_path,
          title: movie.title,
          average_rating: movie.average_rating
        }
      })
      .sort((a, b) => a.average_rating - b.average_rating)
  }
  //import day.js here and format date in cleaner
  //format genres in cleaner?
  return {
    id: data.id,
    title: data.title,
    poster_path: data.poster_path,
    backdrop_path: data.backdrop_path,
    release_date: dayjs(data.release_date).format('MMM D, YYYY'),
    overview: data.overview,
    genres: data.genres,
    budget: data.budget || 'unavailable',
    revenue: data.revenue || 'unavailable',
    runtime: data.runtime,
    tagline: data.tagline,
    average_rating: data.average_rating
  }
}

const formatDollars = (raw) => {
  console.log(raw)
  return raw === 'unavailable' ?
    'unavailable for this film':
    '$' + Intl.NumberFormat().format(raw)
}

export { scrubbingBubbles, formatDollars }