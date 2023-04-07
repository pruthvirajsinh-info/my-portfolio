import React from 'react'
import LineGradient from '../components/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'

const MySkills = () => {

    const isAMidScreens = useMediaQuery("(min-width: 1060px)")

  return (
    <section id='skills' 
        className='pt-10 pb-24'>
        {/* header and image section */}
        <div className='md:flex md:justify-between md:gap-16 mt-32'>
        <motion.div
        className='md:w-1/3 md:justify-between md:gap-16 mt-32'
        initial='hidden'
        whileInView="visible"
        viewport={{once: true, amount:0.5}}
        transition={{duration:0.5}}
        variants={{
          hidden:{opacity:0, x:-50},
          visible:{opacity:1, x:0}
        }}>
        <p className='font-playfair font-semibold text-4xl mb-5'>
            MY <span className='text-red'>Skills</span>
        </p>
        <LineGradient width="w-1/3" />
        <p className="mt-10 mb-7"></p>
            xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]
        </motion.div>
        </div>
    <div className='mt-16 md:mt-0'>
    {
        isAMidScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10  before:w-full  before:h-full before:border-2 before:border-blue before:z-[-1]">

          <img src="assets/skills-image.png" alt="skills" 
              className='z-10'/>
        </div>
        ):
        (
            <img src="assets/skills-image.png" alt="skills" 
              className='z-10'/>
        )
    }

    </div>

    </section>
  )
}

export default MySkills
