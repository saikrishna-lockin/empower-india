import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ChallengesPage from './pages/ChallengesPage';
import StartupsPage from './pages/StartupsPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import ChallengeDetailPage from './pages/ChallengeDetailPage';
import SubmitSolutionPage from './pages/SubmitSolutionPage';
import GovernmentDashboard from './pages/GovernmentDashboard';
import StartupDashboard from './pages/StartupDashboard';
import ExpertDashboard from './pages/ExpertDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Preloader from './components/Preloader';

function MainLayout() {
  const location = useLocation();
  const isDashboard = ['/government', '/startup', '/expert', '/admin'].some(path => 
    location.pathname.startsWith(path)
  );

  return (
    <div className="flex flex-col min-h-screen">
      {!isDashboard && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/challenges" element={<ChallengesPage />} />
          <Route path="/challenges/:id" element={<ChallengeDetailPage />} />
          <Route path="/submit-solution" element={<SubmitSolutionPage />} />
          <Route path="/startups" element={<StartupsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/government" element={<GovernmentDashboard />} />
          <Route path="/startup" element={<StartupDashboard />} />
          <Route path="/expert" element={<ExpertDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      {!isDashboard && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Preloader />
      <MainLayout />
    </Router>
  );
}

export default App;
