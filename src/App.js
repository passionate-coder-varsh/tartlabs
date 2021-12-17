import React from 'react';
import { BrowserRouter as Router,} from 'react-router-dom'; 

import Home from './components/Home';
import Sing from './components/Sing';
import Footer from './components/Footer';
import Musigprofooter from './components/Musigprofooter';
import './App.css';

 function App() {
  return (
      <Router>

          <Home/>

          <Sing />

          <Musigprofooter/>

          <Footer/>
          
      </Router>
  );
}
export default App;