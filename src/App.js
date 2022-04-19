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

  const [data, setData] = useState([]);
  const [displayResults, setDisplayResults] = useState(false)

  const handleSearch = (result) => {
    setData(result)
    setDisplayResults(true)
    console.log(result)
  }

  // const handleSubmit = () => {

  // }

  // const handleUpdate = () => {

  // }

  // const handleDelete = () => {

  // }

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
          <Route path='/search' element={<Search handleSearch={handleSearch} />} />
          <Route path='/submit' element={<Submit />} />
          <Route path='/update' element={<Update />} />
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
