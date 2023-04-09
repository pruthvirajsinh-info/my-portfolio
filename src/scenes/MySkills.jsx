import React from 'react'
import LineGradient from '../components/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'

const MySkills = () => 
{
  const isAMidScreens = useMediaQuery("(min-width: 1060px)")

  return (
    <section id='skills' 
      className='pt-40 my-1'>
      {/* header and image section */}
      <div className='md:flex md:justify-between md:gap-16'>
        <motion.div
          className='md:w-1/3'
          initial='hidden'
          whileInView="visible"
          viewport={{once: true, amount:0.5}}
          transition={{duration:0.5}}
          variants={{
          hidden:{opacity:0, x:-50},
          visible:{opacity:1, x:0}
          }}>
          <p className='font-playfair font-semibold text-4xl mb-5'>
            My <span className='text-red'>Skills</span>
          </p>
          <LineGradient width="w-2/5" />
          <ul className="mt-10 mb-5 font-rajdhani text-lg">
            <li>◆ JavaScript (ES6+)</li>
            <li>◆ TypeScript</li>
            <li>◆ React</li>
            <li>◆ Node.JS</li>
            <li>◆ Redux</li>
          </ul>
        </motion.div>

        <div className='mt-16 md:mt-0'>
        {
        isAMidScreens ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">

          <img src="assets/skills-image.png" alt="skills" className='z-10'/>
          </div>
        ):
        (
          <img src="assets/skills-image.png" alt="skills" className='z-10'/>
        )
        }
        </div>
      </div>

      <div className='md:flex md:justify-between mt-1 gap-32'>
        {/* Experience */}
        <motion.div
          className='md:w-1/3 mt-10 '
          initial='hidden'
          whileInView="visible"
          viewport={{once: true, amount:0.5}}
          transition={{duration:0.5}}
          variants={{
          hidden:{opacity:0, y:50},
          visible:{opacity:1, y:0}
          }}>
          <div className="relative h-32">
            <div className="z-10">
              <p className='font-playfair font-semibold text-5xl'>01</p>
              <p className='font-playfair font-semibold text-3xl mt-3'>Experience</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />        
          </div>
          <ul className="mt-5 font-rajdhani font-semibold ">
            <li>◆ Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis.</li>
            <li>◆ Helped solidify a brand direction that spans both packaging and web.</li>
            <li>◆Interfaced with clients on a weekly basis, providing technological expertise.</li>
          </ul>
        </motion.div>

        {/* Innovative */}
        <motion.div
          className='md:w-1/3 mt-10 '
          initial='hidden'
          whileInView="visible"
          viewport={{once: true, amount:0.5}}
          transition={{ delay:0.2,duration:0.5}}
          variants={{
          hidden:{opacity:0, y:50},
          visible:{opacity:1, y:0}
          }}>
          <div className="relative h-32">
            <div className="z-10">
              <p className='font-playfair font-semibold text-5xl'>02</p>
              <p className='font-playfair font-semibold text-3xl mt-3'>Innovative</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />        
          </div>
          <ul className="mt-5 font-rajdhani font-semibold">
            <li>◆ Engineered and maintained major features of customer-facing web app using ES6, Handlebars and CSS.</li>
            <li>◆ Manually tested sites in various browsers and mobile devices.</li>
            <li>◆ Work with a variety of different languages, platforms, frameworks, and content management systems.</li>
          </ul>
        </motion.div>

        {/* Imaginative */}
        <motion.div
          className='md:w-1/3 mt-10 '
          initial='hidden'
          whileInView="visible"
          viewport={{once: true, amount:0.5}}
          transition={{ delay:0.4,duration:0.5}}
          variants={{
          hidden:{opacity:0, y:50},
          visible:{opacity:1, y:0}
          }}>
          <div className="relative h-32">
            <div className="z-10">
              <p className='font-playfair font-semibold text-5xl'>03</p>
              <p className='font-playfair font-semibold text-3xl mt-3'>Imaginative</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />        
          </div>
          <ul className="mt-5 font-rajdhani font-semibold">
            <li>◆ Write modern, performant, maintainable code for a diverse array of client and internal projects.</li>
            <li>◆ Built and shipped Extension leveraging third-party and internal APIs.</li>
            <li>◆ Architected and implemented the front-end of  web App widget, which lets users log in.</li>
          </ul>
        </motion.div>
      </div>
    </section >
  )
} 

export default MySkills
