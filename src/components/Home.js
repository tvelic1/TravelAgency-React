import React from 'react';
import '../css/App.css';
import HeroSection from './HeroSection';

function Home({flag,trenutniKorisnik}) {
  return (
    <>
      <HeroSection flag={flag} trenutniKorisnik={trenutniKorisnik} />
    </>
  );
}

export default Home;