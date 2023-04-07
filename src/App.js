import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/MySkills";

function App() {

  const [selectedPage, setSelectedPage] = useState('home');
  const [isTop,setIsTop] = useState(true);
  const isAMdScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {

    const handleScroll = () =>
    {
      if(window.screenY === 0) setIsTop(true);
      if(window.screenY !== 0) setIsTop(false);
    }
    
    window.addEventListener("scroll",handleScroll);
    return() => window.removeEventListener("scroll",handleScroll);
  },[]);


  return (
    
    <div className="app bg-deep-blue">
      <Navbar 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTop={isTop}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAMdScreens &&(
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className={`h-0.5 ${width} bg-gradient-rainblue`}>
        <MySkills />
      </div>
    </div>
  );
}

export default App;
