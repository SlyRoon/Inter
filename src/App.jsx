import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Wrapper from './components/wrapper';
import Header from './components/header';
import { MainSection } from './components/main-section/main-section';

function App() {

  return (
    <Wrapper>
      <Header />
      <MainSection/>
    </Wrapper>
  );
}

export default App
