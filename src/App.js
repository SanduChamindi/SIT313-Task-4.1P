import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import FeaturedSection from './components/FeaturedSection';
import TutorialCards from './components/TutorialCards';
import Footer from './components/Footer';

const ArticlesPage = () => (
  <div style={{ padding: '2em' }}>
    <h2>📰 Articles</h2>
    <FeaturedSection />
  </div>
);

const TutorialsPage = () => (
  <div style={{ padding: '2em' }}>
    <h2>🎓 Tutorials</h2>
    <TutorialCards />
  </div>
);

function App() {
  return (
    <Router>
      <HeaderBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FeaturedSection />
              <TutorialCards />
            </>
          }
        />
        <Route path="/tutorials" element={<TutorialsPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
