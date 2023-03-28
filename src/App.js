import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Poland from './pages/Poland';
import France from './pages/France';
import Ukraine from './pages/Ukraine'
import Germany from './pages/Germany';
import Italy from './pages/Italy';
import Homepage from './pages/Homepage';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/country/poland" element={<Poland />} />
        <Route path="/country/ukraine" element={<Ukraine />} />
        <Route path="/country/France" element={<France />} />
        <Route path="/country/germany" element={<Germany />} />
        <Route path="/country/italy" element={<Italy />} />
        <Route path="/" element={<Homepage />} default />
      </Routes>
      
    </Router>
  );
}

export default App;






