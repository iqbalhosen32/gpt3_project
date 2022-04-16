import './App.css';
import { Navbar, CTA, Brand} from './components';
import {Blog, Footer, Header, Posibility, Features, WhatGPT3} from './container';

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Posibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
