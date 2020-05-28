import React from 'react'

function Search ({handleInput, search, totalResults}) {
  return (
    <section className="searchBox-wrap">
      <input
        type="text"
        placeholder="Search..."
        className="searchBox"
        onChange={handleInput}
        onKeyPress={search}
      />
      <span className="amount">Total results: {totalResults}</span>
    </section>
  )
}

export default Search