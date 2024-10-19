import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

export function App() {
  return (
    <div className='font-Inter'>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
