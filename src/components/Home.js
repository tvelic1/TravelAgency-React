import React from 'react';
import '../css/App.css';
import HeroSection from './HeroSection';
import Cards from './Cards';
import Stories from './Stories';
import Title from './Title';




function Home({flag,trenutniKorisnik}) {
  return (
    <>
      <HeroSection flag={flag} trenutniKorisnik={trenutniKorisnik} />
      <Cards/>
      <Stories/>
    </>
  );
}

export default Home;