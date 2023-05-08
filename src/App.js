import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Entertainment from './pages/Entertainment';
import Business from './pages/Business';
import Technology from './pages/Technology'
import Sport from './pages/Sport';
import Health from './pages/Health';
import Homepage from './pages/Homepage';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/category/entertainment" element={<Entertainment />} />
        <Route path="/category/technology" element={<Technology />} />
        <Route path="/category/sport" element={<Sport />} />
        <Route path="/category/business" element={<Business />} />
        <Route path="/category/health" element={<Health />} />
        <Route path="/" element={<Homepage />} default />
      </Routes>
      
    </Router>
  );
}

export default App;






