import axios from '../axios'
import React, { useState, useEffect } from 'react'

const base_url = 'https://image.tmdb.org/t/p/original/'

function Row({ title, large, fetchUrl }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
    }
    fetchMovies()
  }, [fetchUrl])

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
              src={base_url + movie.poster_path}
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
    </div>
  )
}

export default Row
