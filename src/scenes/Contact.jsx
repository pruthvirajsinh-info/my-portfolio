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
    <div id='contact' className='pt-32 my-1'>
      {/* Heading */}
      <motion.div
        className='flex justify-end w-full'
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
          <span className='text-yellow'>CONTACT</span>
          <span className='text-red'> {" "} ME {" "}</span>
          TO GET STARTED
          </p>
          <div className='flex md:justify-end my-5'>
            <LineGradient width="w-4/6" />
          </div>
        </div>
      </motion.div>
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          className='basis-1/2 flex justify-center'
          initial='hidden'
          whileInView="visible"
          viewport={{once: true, amount:0.5}}
          transition={{duration:0.5}}
          variants={{
          hidden:{opacity:0, y:50},
          visible:{opacity:1, y:0} 
          }}>
          <img src="../assets/contact-image.jpeg" alt="contact" />
        </motion.div>

        <motion.div
          className='basis-1/2 mt-10 md:mt-0'
          initial='hidden'
          whileInView="visible"
          viewport={{once: true, amount:0.5}}
          transition={{delay:0.2,duration:0.5}}
          variants={{
          hidden:{opacity:0, y:50},
          visible:{opacity:1, y:0} 
          }}>
          <form action="https://formsubmit.co/c062ec416d0c73b663dda8f87e64e619"
            target="_blank"
            onSubmit={onSubmit}
            method='POST'
            className='text-right'
            >
            <input type="text" 
            className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
            placeholder='NAME'
            {...register("name",{ required:true, maxLength:100})}
            />
            {errors.name && (
              <p className="text-red mt-1">
                  {errors.name.type === 'required' && "this field is required"}
                  {errors.name.type === 'maxLength' && "Max length is 100 char."}
              </p>)}
            <input type="text" 
            className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
            placeholder='EMAIL'
            {...register("email",{ 
              required:true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, })}
              />
              {errors.email && (
              <p className="text-red mt-1">
                  {errors.email.type === 'required' && "this field is required"}
                  {errors.email.type === 'pattern' && "Invalid Email address."}
              </p>)}

            <textarea 
            rows="4"
            cols="50"
            type="text"  
            className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
            placeholder='MESSAGE'
            {...register("message",{ 
              required:true,
              maxLength:1000 })}
              />
              {errors.message && (
              <p className="text-red mt-1">
                  {errors.message.type === 'required' && "this field is required"}
                  {errors.message.type === 'maxLength' && "Max length is 1000 char."}
              </p>)}
              <button
              type='submit'
              className='p-3 rounded-full bg-yellow text-deep-blue mt-5 text-lg font-bold
                        hover:bg-red hover:text-white transition duration-500 font-rajdhani'
              >SUBMIT


              </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
