import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Pagination } from '@material-ui/lab';

import { apiUrl, searchUrl, apiKay } from './config'
import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
    totalResults: 0,
    genreId: 0,
    totalPages: 0,
    page: 1
  })

  const search = (e, pageUpdate) => {
    if (!pageUpdate) {
      setState(prevState => {
        return { ...prevState, page: 1}
      })
    }
    if (e?.key === "Enter" || pageUpdate) {
      axios(searchUrl+state.s+'&page='+state.page).then(({data})=>{
        let results = state.genreId
          ? data.results.filter(result => result.genre_ids.indexOf(+state.genreId) > -1)
          : data.results
        setState(prevState => {
          return {
            ...prevState,
            results: results,
            totalResults: data.total_results,
            totalPages: data.total_pages
          }
        })
      })
    }
  }

  const switchPage = () => {
    search(void 0, true)
  }

  const handleChange = (page) => {
    setState(prevState => {
      return {...prevState, page: page}
    })
  }

  const handleSelect = (e) => {
    let genre = e.target.value;
    setState(prevState => {
      return { ...prevState, genreId: genre}
    })
  }

  const handleInput = (e) => {
    let s = e.target.value;
    setState(prevState => {
      return { ...prevState, s: s}
    })
  }

  const openPopup = id => {
    axios(`${apiUrl}movie/${id}?api_key=${apiKay}`).then(({ data }) => {
      let result = data;
      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  useEffect(switchPage, [state.page])

  return (
    <div className="App">
      <header>
        <h1>Movie Library</h1>
      </header>
      <main>
        <Search
          handleInput={handleInput}
          handleSelect={handleSelect}
          search={search}
          totalResults={state.totalResults}
        />
        {(state.totalPages > 1)
          ? <Pagination count={state.totalPages} page={state.page} onChange={(e,page) => handleChange(page)}/>
          : false
        }
        <Results results={state.results} openPopup={openPopup} />
        {(typeof state.selected.title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  )
}

export default App;
