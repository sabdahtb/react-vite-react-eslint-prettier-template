import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStyles } from './style'

const PageOne = () => {
  const classes = useStyles()
  const [movieList, setMovieList] = useState<any[]>()
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=3`,
      )
      .then((res) => setMovieList(res?.data?.results))
  }, [])
  return (
    <div className={classes.colors}>
      <h1>PageOne</h1>
      <Link to={'/page2'}>ahahha</Link>
      {movieList?.map((e) => (
        <div key={e.id}>
          <h2>{e?.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default PageOne
