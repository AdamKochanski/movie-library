import React, {useState} from 'react'
import axios from 'axios'

import Search from './components/Search'
import Results from './components/Results'

export const apiKay = `a816a5e1b96a295b1b1cfbcf3c9c90ca`
export const lang = `en-US`
export const includeAdult = false
export const Page = 1
export const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKay}&language=${lang}&page=${Page}&include_adult=${includeAdult}`
export const apiUrl2 = `https://api.themoviedb.org/3/movie/550?api_key=${apiKay}` //alternative url

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  })

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiUrl+"&query="+state.s).then(({data})=>{
        let results = data.results
        setState(prevState => {
          return {...prevState, results: results}
        })
      })
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;
    console.log(apiUrl);
    setState(prevState => {
      return { ...prevState, s: s}
    })
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Library</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search}/>
        <Results results={state.results}/>
      </main>
    </div>
  )
}

export default App;
