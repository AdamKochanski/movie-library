import React from 'react'
import { imgUrl } from './../config'

function Popup({ selected, closePopup }) {
  return (
    <section className="popup">
      <div className="content">
        <h2>{ selected.title } <span>({ selected.release_date })</span></h2>
        <p className="rating">Popularity: {selected.popularity}</p>
        <div className="plot">
          {selected.poster_path !== null
            ? <img src={imgUrl+selected.poster_path} alt={selected.title}/>
            : <span>Poster is not available</span>
          }
          <p>{selected.overview}</p>
        </div>
        <button className="close" onClick={closePopup}>Close</button>
      </div>
    </section>
  )
}

export default Popup