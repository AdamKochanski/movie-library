import React from 'react';
import { imgUrl } from '../config';
import noPosterImg from '../assets/img/no-poster.jpg';

function Result({ result, openPopup }) {
  return (
    <div
      role="button"
      tabIndex={0}
      className="result"
      onKeyDown={() => openPopup(result.id)}
      onClick={() => openPopup(result.id)}
    >
      {result.poster_path !== null
        ? <img src={imgUrl + result.poster_path} alt={result.title} />
        : <img src={noPosterImg} alt="Poster is not available" />}
      <h3>{result.title}</h3>
    </div>
  );
}

export default Result;
