import React,{ useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

const Link = ({ page,selectedPage,setSelectedPage}) =>
{
    const lowerCasePage = page.toLowerCase();
    return(
        <AnchorLink 
        className = {` ${selectedPage === lowerCasePage ? "text-yellow" : "" } hover:text-red transition duration-500 `}
        href={`#${lowerCasePage}`} 
        onClick={() => setSelectedPage(lowerCasePage)}>
            {page}
        </AnchorLink>
    );
    
}

const Navbar = ({isTop,selectedPage,setSelectedPage}) => 
{

    const [isMenuToggled, setIsMenuToggled] = useState(false);

    const isDesktop = useMediaQuery("(min-width: 768px)");

    const navbarBG = isTop ? '' : 'bg-deep-blue/95 border-b-2 border-blue';

  return (
    <nav className={` ${navbarBG} z-40 w-full fixed top-0 py-6 `}>
        <div className='flex items-center justify-between mx-auto w-5/6'>
            <h2 className="font-playfair text-6xl font-bold text-blue">PC</h2>

            {/* Desktop nav font-rajdhani font-playfair font-opensans */}
            {isDesktop ? (
                <div className='flex justify-between gap-16 font-rajdhani text-4xl text-blue'>
                <Link page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <Link page="Skills"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <Link page="Projects"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <Link page="Testimonials"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <Link page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                </div>
            ):
            (
                <button 
                className="rounded-full bg-red p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <img src="../assets/menu-icon.svg" alt="menu-icon" />
                </button>
            )}
            
            {/* Mobile Menu Pop */}
            {!isDesktop && isMenuToggled && (
                <div className="fixed right-0 bottom-0 h-full bg-deep-blue/95 w-[300px] border-l-2 border-blue">
                    {/* Close button */}
                    <div className='flex justify-end p-12'>
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <img src="../assets/close-icon.svg" alt="close-icon" />
                        </button>
                    </div>
                    {/* Menu Items */}
                    <div className="flex flex-col gap-10 ml-[33%] font-rajdhani text-2xl text-blue ">
                        <Link page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Link page="Skills"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Link page="Projects"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Link page="Testimonials"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Link page="Contact"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar
