import './App.css';
import Brand from './components/brand/Brand'
import Navbar from './components/navbar/Navbar'
import CTA from './components/cta/CTA'
import Blog from './container/blog/Blog'
import Footer from './container/footer/Footer';
import Header from './container/header/Header'
import WhatGPT3 from './container/whatGPT3/WhatGPT3'
import Possibiliti from './container/possibilties/Possibiliti';
import Features from './container/features/Features';
function App() {
  return (
    <>
      <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
       <Features/>
        <Possibiliti />
        <CTA />
        <Blog />
        <Footer />

      </div>
    </>
  );
}

export default App;
