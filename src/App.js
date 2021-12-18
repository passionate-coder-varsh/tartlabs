import './App.css';
import React from 'react';
import Home from './components/Home';
import Sing from './components/Sing';
import Linear from './components/Linear';
import Footer from './components/Footer';
import TopSingers from './components/TopSingers';
import Leaderboard from './components/Leaderboard';
import Countdown from './components/Countdown';
import Musigprofooter from './components/Musigprofooter';
import { BrowserRouter as Router,} from 'react-router-dom'; 

 function App() {
  return (
      <Router>
          
          <Home/>

          <Countdown />
          
          <Sing />
          
          <TopSingers />

          <Leaderboard />

          <Linear />

          <Musigprofooter/>

          <Footer/>
          
      </Router>
  );
}
export default App;