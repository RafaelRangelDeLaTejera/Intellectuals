import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import AnshulsPage from './anshulPage.js';
import JosephsPage from './josephPage.js';
import RafasPage from './rafaPage.js';
import NitinsPage from './nitinPage.js';

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/anshul">Anshul's Page</Link>
              </li>
              <li>
                <Link to="/joseph">Joseph's Page</Link>
              </li>
              <li>
                <Link to="/rafa">Rafa's Page</Link>
              </li>
              <li>
                <Link to="/nitin">Nitin's Page</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/anshul" element={<AnshulsPage />} />
            <Route path="/joseph" element={<JosephsPage />} />
            <Route path="/rafa" element={<RafasPage />} />
            <Route path="/nitin" element={<NitinsPage />} />
            <Route path="/" element={<h1>Home Page</h1>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
