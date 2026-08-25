import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ChallengesPage from './pages/ChallengesPage';
import StartupsPage from './pages/StartupsPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import Preloader from './components/Preloader';

function App() {
  return (
    <Router>
      <Preloader />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/challenges" element={<ChallengesPage />} />
            <Route path="/startups" element={<StartupsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
