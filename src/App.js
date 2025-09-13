
import React from 'react';
import Header from './components/Header';
import FeaturedArticles from './components/FeaturedArticles';
import Footer from './components/Footer';
import FeaturedTutorials from './components/FeaturedTutorials';
import NewsletterSignup from './components/NewsletterSignup';
import HeroBanner from './components/HeroBanner';

function App() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <FeaturedArticles />
      <FeaturedTutorials />
      <NewsletterSignup /> 
      <Footer />
     

    </div>
  );
}

export default App;

