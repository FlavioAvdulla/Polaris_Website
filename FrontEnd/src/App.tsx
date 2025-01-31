import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar_01 from './components/Navbar/Navbar_01';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Navbar_01 />
      </Router>
    </div>
  );
};

export default App;
