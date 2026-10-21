import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/
import { Routes, Route } from "react-router-dom";
import Works from "./components/pages/works";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Navbar from './components/navbar';
import Hero from './components/hero';
import Features from './components/features';



function App() {

  const [heroKey, setHeroKey] = useState(0);

  return (
    <div className="overflow-hidden">
      <Navbar onLogoClick={() => setHeroKey(prev => prev + 1)} />
      <Routes>
        {/* 1. HOME PAGE ROUTE (The Fix!) */}
        {/* We wrap Hero & Features in a fragment <>...</> so they are treated as one "page" */}
        <Route path="/" element={
          <>
            <Hero key={heroKey} />
            {/* <Features /> */}
          </>
        } />

        {/* 2. YOUR OTHER PAGES */}
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      {/* Extra space at bottom to allow scrolling */}
      <footer className="py-10 text-center text-slate-600 text-sm select-none">
        © 2026 yuyucodes. built with love ᰔ .
      </footer>
      <Analytics />
    </div>
  );
}

export default App;