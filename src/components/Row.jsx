import axios from '../axios'
import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url = 'https://image.tmdb.org/t/p/original/'

function Row({ title, large, fetchUrl }) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
    }
    fetchMovies()
  }, [fetchUrl])

  function playTrailer(movie) {
    if (trailerUrl) setTrailerUrl('')
    else {
      movieTrailer(movie?.name || movie?.title || '')
        .then((url) => {
          const params = new URLSearchParams(new URL(url).search)
          setTrailerUrl(params.get('v'))
        })
        .catch((error) => console.log(error))
    }
  }

  const options = {
    height: '400',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }

  return (
    <div className="my-1 mx-2 p-1">
      <h2
        className="text-white"
        style={{ fontFamily: "'Roboto', sans-serif", fontSize: '1.3rem' }}
      >
        {title}
      </h2>
      <div className="flex flex-row my-2 p-1.5 overflow-x-scroll overflow-y-hidden posters">
        {movies?.map((movie, index) => {
          return (
            <img
              key={index}
              onClick={() => playTrailer(movie)}
              src={`${base_url}${
                large
                  ? movie.poster_path
                  : movie.backdrop_path || movie.poster_path
              }`}
              className={
                large
                  ? 'object-contain w-full mr-2.5 hover:scale-110 duration-300 max-h-32'
                  : 'object-contain w-full mr-2.5 hover:scale-110 duration-300 max-h-24'
              }
              alt={movie.name}
            />
          )
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={options} />}
    </div>
  )
}

export default Row
