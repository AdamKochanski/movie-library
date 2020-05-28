import React from 'react'

const imgUrl = `https://image.tmdb.org/t/p/w300/`

function Result ({ result }) {
  return (
    <div className="result">
      <img src={imgUrl+result.poster_path}/>
      <h3>{result.title}</h3>
    </div>
  )
}

export default Result