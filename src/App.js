import React, {useState} from 'react'
import axios from 'axios'

import { apiUrl, searchUrl, apiKay } from './config'
import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
    totalResults: 0
  })

  const search = (e) => {
    if (e.key === "Enter") {
      axios(searchUrl+state.s).then(({data})=>{
        let results = data.results
        let totalResults = data.total_results
        setState(prevState => {
          return {...prevState, results: results, totalResults: totalResults}
        })
      })
    }
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

  return (
    <div className="App">
      <header>
        <h1>Movie Library</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} totalResults={state.totalResults}/>
        <Results results={state.results} openPopup={openPopup} />
        {(typeof state.selected.title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  )
}

export default App;
