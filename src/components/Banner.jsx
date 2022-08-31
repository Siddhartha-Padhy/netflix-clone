import React from 'react'
import { useEffect, useState } from 'react'
import requests from '../requests'
import axios from '../axios'

function Banner() {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    async function fetch_data() {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ],
      )
    }
    fetch_data()
  }, [])

  function truncate(words, limit) {
    return words?.length > limit ? words.substr(0, limit - 1) + '...' : words
  }

  return (
    <header
      className="color-white object-contain"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
        height: '400px',
      }}
    >
      <div className="ml-8 pt-36 h-48 text-white">
        <h1 className="pb-1.5 font-extrabold">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button
            className="cursor:pointer outline-none text-white px-2 mr-4 py-2 border-none rounded-md hover:text-black hover:bg-white transition-all duration-200"
            style={{ backgroundColor: 'rgba(51,51,51,0.5)' }}
          >
            Play
          </button>
          <button
            className="cursor:pointer outline-none text-white px-2 mr-4 py-2 border-none rounded-md hover:text-black hover:bg-white transition-all duration-200"
            style={{ backgroundColor: 'rgba(51,51,51,0.5)' }}
          >
            My List
          </button>
        </div>
        <h3 className="pt-4 max-w-96 text-sm" style={{ width: '45rem' }}>
          {truncate(movie?.overview, 180)}
        </h3>
      </div>
      <div
        style={{
          height: '7.4rem',
          backgroundImage:
            'linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)',
        }}
      ></div>
    </header>
  )
}

export default Banner
