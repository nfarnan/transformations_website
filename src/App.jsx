import './App.css'
import React from 'react';
import {HashRouter as Router,Route,Routes} from 'react-router-dom'
import {createBrowserHistory} from 'history';
import Home from './pages/Home'
import Media from './pages/Media'
import Map from './pages/Maps'
import Timeline from './pages/Timeline'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
function App() {
    return(
      <Router history={createBrowserHistory} >
        <div className="Layout">
          <Navbar />
          <div className="outlet">
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path="/map" element={<Map />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/media" element={<Media />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    )
}

export default App;
