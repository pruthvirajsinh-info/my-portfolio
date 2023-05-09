import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Testimonials from "./scenes/Testimonials";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";

import {Helmet} from "react-helmet";



function App() {

  const [selectedPage, setSelectedPage] = useState('home');
  const [isTop,setIsTop] = useState(true);
  const isAMdScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => 
{

    const handleScroll = () =>
    {
      if(window.scrollY !== 0)
      {
        setIsTop(false);
      }
      if(window.scrollY === 0)
      {
        setIsTop(true);
        setSelectedPage("home");
      }
    }
    
    window.addEventListener("scroll",handleScroll);
    return() => window.removeEventListener("scroll",handleScroll);
  });

  console.log(isTop);

  return (    
    <div className="app bg-deep-blue">
        <Helmet>
                <meta charSet="utf-8" />
                <title>Pruthviraj's Portfolio</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    
      <Navbar 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTop={isTop}>
      </Navbar>
      
      <div className="w-5/6 mx-auto my-1 ">
        {isAMdScreens &&
        (<DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}>
        </DotGroup>)}
        
        <Landing setSelectedPage={setSelectedPage} />

      </div>
      
      <LineGradient />

      <div className="w-5/6 mx-auto my-1 py-1">
        <MySkills />   
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto my-1 py-1">
        <Projects />        
      </div>

      <LineGradient />
      
      <div className="w-5/6 mx-auto my-1 py-1">
        <Testimonials />        
      </div>

      <LineGradient />
      
      <div className="w-5/6 mx-auto my-1 py-1">
        <Contact />        
      </div>

      <Footer />

    </div>
  );
}

export default App;
