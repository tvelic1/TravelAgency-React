import React from 'react';
import '../css/App.css';
import HeroSection from './HeroSection';
import Cards from './Cards';

function Home({flag,trenutniKorisnik}) {
  return (
    <>
      <HeroSection flag={flag} trenutniKorisnik={trenutniKorisnik} />
      <Cards/>
    </>
  );
}

export default Home;