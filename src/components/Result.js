import React from 'react'
import { imgUrl } from './../config'

function Result ({ result, openPopup }) {
  return (
    <div className="result" onClick={() => openPopup(result.id)}>
      {result.poster_path !== null
        ? <img src={imgUrl+result.poster_path} alt={result.title}/>
        : <span className="unavailable">Poster is not available</span>
      }
      <h3>{result.title}</h3>
    </div>
  )
}

export default Result