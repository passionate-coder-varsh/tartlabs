import React from 'react';
import { BrowserRouter as Router,} from 'react-router-dom'; 
import Home from './components/Home';
import Sing from './components/Sing';
import Footer from './components/Footer';
import './App.css';

 function App() {
  return (
<Router>

  <Home/>
  <Sing />
   <Footer/>
</Router>
  );
}
export default App;