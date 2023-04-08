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


function App() {

  const [selectedPage, setSelectedPage] = useState('home');
  const [isTop,setIsTop] = useState(true);
  const isAMdScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {

    const handleScroll = () =>
    {
      if(window.scrollY !== 0)
      {
        setIsTop(false);
      }
      if(window.scrollY === 0)
      {
        setIsTop(true);
      }
    }
    
    window.addEventListener("scroll",handleScroll);
    return() => window.removeEventListener("scroll",handleScroll);
  });

console.log(isTop);

  return (
    
    <div className="app bg-deep-blue">
      <Navbar 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTop={isTop}
      />

      <div className="w-5/6 mx-auto md:h-full">
        {isAMdScreens &&
        (<DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />)}
        <Landing setSelectedPage={setSelectedPage} />
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto my-auto md:h-full ">
        <MySkills />   
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto ">
        <Projects />        
      </div>

      <LineGradient />
      
      <div className="w-5/6 mx-auto md:h-full">
        <Testimonials />        
      </div>

      <LineGradient />
      
      <div className="w-5/6 mx-auto md:h-full">
        <Contact />        
      </div>

    </div>
  );
}

export default App;
