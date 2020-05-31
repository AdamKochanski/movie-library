import React from 'react';
import { Button } from '@material-ui/core';
import { imgUrl } from '../config';
import noPosterImg from '../assets/img/no-poster.jpg';

function Popup({ selected, closePopup }) {
  return (
    <section className="popup">
      <div className="content">
        <h2>
          <p>{selected.title}</p>
          <span>
            {selected.release_date}
          </span>
        </h2>
        <p className="rating">
          <span>Popularity: </span>
          {selected.popularity}
        </p>
        <div className="plot">
          {selected.poster_path !== null
            ? <img src={imgUrl + selected.poster_path} alt={selected.title} />
            : <img src={noPosterImg} alt="Poster is not available" />}
          <p>{selected.overview}</p>
        </div>
        <Button variant="contained" color="secondary" size="large" onClick={closePopup}>BACK</Button>
      </div>
    </section>
  );
}

export default Popup;
