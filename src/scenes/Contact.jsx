import React from 'react'
import LineGradient from "../components/LineGradient"
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

const Contact = () => {

  const {
    register,
    trigger,
    formState: {errors}
  } = useForm();

  const onSubmit = async (e) =>
  {
    const isValid = await trigger();
    if(!isValid)
    {
      e.preventDefault();
    }
  }

  return (
    <section id='contact' className='py=48'>
      {/* Heading */}
      <motion.div
        initial='hidden'
        whileInView="visible"
        viewport={{once: true, amount:0.5}}
        transition={{duration:0.5}}
        variants={{
        hidden:{opacity:0, x:-50},
        visible:{opacity:1, x:0} 
        }}>
        <div>
          <p className='font-playfair font-semibold text-4xl text-blue'>
          <span className='text-yellow'>Contact ME</span> to get Started
          </p>
          <div className='flex md:justify-end my-5'>
            <LineGradient width="mx-auto w-3/5" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
