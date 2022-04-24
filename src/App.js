// Import Style and visual assets
import './App.css';
import logo from './assets/bp-logo-white.png'
// Import functions
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
// Import components
import Nav from './components/Nav.js'
import Search from './components/Search';
import Submit from './components/Submit';
import Update from './components/Update';
import Results from './components/Results';

// HomePage
const Home = () => (
  <header className="App-header">
    <h1>Welcome to the Book Directory</h1>
  </header>
)


function App() {
// These variables define the results of search, submit, update or delete and will display the output from API
  const [data, setData] = useState([]);
  const [displayResults, setDisplayResults] = useState(false)

  const handleResults = (result) => {
    setData(result)
    setDisplayResults(true)
    console.log(result)
  }

  const clearData = (e) => {
    setData([])
    setDisplayResults(false)
  }

  return (
    <Router>
      <div className="App">
        <Home />
        <Nav clearData={clearData} />
        <Routes>
          <Route path='/search' element={<Search handleResults={handleResults} />} />
          <Route path='/submit' element={<Submit handleResults={handleResults}/>} />
          <Route path='/update' element={<Update handleResults={handleResults}/>} />
        </Routes>
        <Results
          data={data}
          displayToggle={displayResults}
        />
        <footer>
          <img src={logo} alt='BP logo' />
        </footer>
      </div>
    </Router>
  );
}

export default App;
