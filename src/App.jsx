import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from "./components/Home.jsx";
import CoverLetter from "./components/CoverLetter.jsx";
import Resume from "./components/Resume.jsx";
import Portfolio from "./components/Portfolio.jsx";
import PaintGame from './components/PaintGame.jsx';


const App = () => {
  return (
    <Router>
      <AnimatePresence mode='wait'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cover-letter" element={<CoverLetter />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/paint-game" element={<PaintGame />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default App;