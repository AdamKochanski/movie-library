import React from 'react'
import { imgUrl } from './../config'

function Result ({ result, openPopup }) {
  return (
    <div className="result" onClick={() => openPopup(result.id)}>
      <img src={imgUrl+result.poster_path}/>
      <h3>{result.title}</h3>
    </div>
  )
}

export default Result