import './App.css';
import './stylesheets/Home.css';
import './stylesheets/Footer.css';
import './stylesheets/Linear.css';
import './stylesheets/Countdown.css';
import './stylesheets/Sing.css';
import './stylesheets/TopSingers.css';
import './stylesheets/Leaderboard.css';
import './stylesheets/MusigProFooter.css';
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
          
           <Linear />

          {/*<TopSingers />

          <Leaderboard />



          <Musigprofooter/>

          <Footer/> */}
          
      </Router>
  );
}
export default App;