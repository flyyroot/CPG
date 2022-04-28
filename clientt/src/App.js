import React from 'react';
import Header from './components/header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Inspirasi from './pages/Inspirasi';
import Mentor from './pages/mentor';
import Partner from './pages/partner';
import Community from './pages/community';
import Error from './pages/error';
import Home from './pages/home';
function App() {
  return (
      <Router>
          <Header/>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/inspirasi" element={<Inspirasi/>}/>
            <Route path="/mentor" element={<Mentor/>}/>
            <Route path="/partner/:username" element={<Partner/>}/>
            <Route path="/community" element={<Community/>}/>
            <Route path="*" element={<Error/>} />
          </Routes>
      </Router>
       
  );
}
export default App

