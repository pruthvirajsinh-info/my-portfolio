import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import {motion} from "framer-motion"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import SocialMediaIcons from '../components/SocialMediaIcons'

const Landing = ({setSelectedPage}) => 
{
  const isAMdScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 pt-1 my-1">
      {/* Image section */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 md:mt-32 ">
        {isAMdScreens ? (
        <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]">
          <img src="assets/profile-image.png" alt="profile" 
              className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]'/>
        </div>
        ):(
        <img src="assets/profile-image.png" alt="profile" 
              className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]'/>
        )}
      </div>

        {/* Main Section */}
      <div className='z-30 basis-2/5 mt-12 md:mt-32'>
        {/* heading */}
        <motion.div
        initial='hidden'
        whileInView="visible"
        viewport={{once: true, amount:0.5}}
        transition={{duration:0.5}}
        variants={{
          hidden:{opacity:0, x:-50},
          visible:{opacity:1, x:0}
          }}>
          <p className="font-rajdhani font-bold z-10 text-cent md:text-start text-6xl xs:relative xs:text-deep-blue xs:font-semibold xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]">PRUTHVI {" "}
            <span className='text-blue z-10'>RAJ</span>
          </p>

          <p className='mt-10 mb-7 font-playfair text-center md:text-start'>
            i'm a Developer basd in Gujarat,India. I have developed many types of front ends. <br />
            I'm passionate about cutting-edge, minimal designs, beautiful interfaces and intuitively implemented UX.
          </p>
        </motion.div>

        {/* Call to actions */}
        <motion.div
        className="flex mt-5 justify-center md:justify-start"
        initial='hidden'
        whileInView="visible"
        viewport={{once: true, amount:0.5}}
        transition={{delay:0.2, duration:0.5}}
        variants={{
          hidden:{opacity:0, x:-50},
          visible:{opacity:1, x:0}
        }}>

          <AnchorLink
          className="bg-gradient-rainblue text-deep-blue py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
          onClick={()=> setSelectedPage("contact")}
          href='#contact'
          >
            Contact Me
          </AnchorLink>

          <AnchorLink
          className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
          onClick={()=> setSelectedPage("contact")}
          href='#contact'
          >
            <div 
            className='bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-semibold px-10'
            >
              Let's Talk
            </div>
          </AnchorLink>

        </motion.div>

        <motion.div
        className="flex mt-5 justify-center md:justify-start"
        initial='hidden'
        whileInView="visible"
        viewport={{once: true, amount:0.5}}
        transition={{delay:0.4, duration:0.5}}
        variants={{
          hidden:{opacity:0, x:-50},
          visible:{opacity:1, x:0}
        }}>
          <SocialMediaIcons />
        </motion.div>

      </div>
    </section>
  )
}

export default Landing
