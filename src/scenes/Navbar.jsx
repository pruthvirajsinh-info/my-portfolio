import React,{ useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

const Link = ({ page,selectedPage,setSelectedPage}) =>
{
    const lowerCasePage = page.toLowerCase();
    <AnchorLink 
        className = {` ${selectedPage === lowerCasePage ? "text-yellow" : "" } 
        hover : text-yellow transition duration-500 `}
        href={`#${lowerCasePage}`} 
        onClick={() => setSelectedPage(lowerCasePage)}
        >
        {page}
    </AnchorLink>
}


const Navbar = ({selectedPage,setSelectedPage}) => {

    const [isMenuToggled, setIsMenuToggled] = useState(false);

    const isDesktop = useMediaQuery("(min-width: 768px)");

console.log(isDesktop,isMenuToggled);

  return (
    <nav className={`z-40 w-full fixed top-0 py-6`}>
        <div className='flex items-center justify-between mx-auto w-5/6'>
            <h4 className="font-opensans text-sm font-semibold">JE</h4>

            {/* Desktop nav */}
            {isDesktop ? (
                <div className='flex justify-between gap-16 font-playfair text-3xl font-bold'>
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
        </div>
    </nav>
  )
}

export default Navbar
