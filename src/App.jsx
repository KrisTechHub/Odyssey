import { useEffect, useState } from 'react';
import './App.css'
import Navbar from '@/components/navbar';
import Home from '@/components/home';
import Services from './components/services';
import Contact from './components/contact';
import Footer from './components/footer';
import Alliances from './components/alliances';
import { SelectedPage } from '@/shared/types'

function App() {
  const [selectedPage, setSelectedPage] = useState(SelectedPage.LaunchPad);
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.LaunchPad);
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  },[])

  return (
    <div className='h-auto mt-24 font-montserrat'>
        <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Home setSelectedPage={setSelectedPage} />
        <Services selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <div id='sections'>
          <Alliances />
            <Contact setSelectedPage={setSelectedPage} />
            <Footer />
        </div>
    </div>
  )
}

export default App
