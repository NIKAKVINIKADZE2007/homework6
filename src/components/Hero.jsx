import React from 'react';
import { Rocket } from '../assets';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

const Hero = () => {
  console.log(useForm());
  const { register, control, handleSubmit, formState } = useForm({});

  return (
    <section className='max-w-[1256px] mx-auto w-full h-[576px] pl-[60px] pr-[184px] py-[20px]'>
      <div className='w-full  h-[536px]'>
        {/* left side  */}
        <div className='max-w-[426px] min-w-[100px] w-full h-full flex flex-col justify-between py-[40px]'>
          {/* top div  */}
          <div className='w-full h-[82px]'>
            <h1 className='text-[30px] font-semibold text-white'>
              Let’s connect constellations
            </h1>
            <p className='text-[17px] text-white opacity-80 text-left max-w-[415px] align-top'>
              Let's align our constellations! Reach out and let the magic of
              collaboration illuminate our skies.
            </p>
          </div>
          {/* bottom div  */}
          <form className='w-full h-[333px] flex flex-col justify-between'>
            <div className='w-full flex justify-between'>
              <input
                type='text'
                placeholder='Last Name'
                className='pl-[14px] mr-[14px] text-white w-full max-w-[206px] opacity-60 h-[42px] bg-white bg-opacity-5 rounded-[5px] border border-white border-opacity-20'
              />

              <input
                type='text'
                placeholder='First Name'
                className='pl-[14px] text-white max-w-[206px] w-full opacity-60 h-[42px] bg-white bg-opacity-5 rounded-[5px] border border-white border-opacity-20'
              />
            </div>
            <input
              type='text'
              placeholder='Email'
              id='Email'
              {...register('Email', {
                required: {
                  value: true,
                  message: 'this username input field is empty!',
                },
              })}
              className='pl-[14px]  text-white  opacity-60 h-[42px] w-full bg-white bg-opacity-5 rounded-[5px] border border-white border-opacity-20'
            />

            <input
              type='number'
              placeholder='Email'
              className='pl-[14px]  text-white  opacity-60 h-[42px] w-full bg-white bg-opacity-5 rounded-[5px] border border-white border-opacity-20'
            />

            <textarea
              type='number'
              placeholder='Message'
              className='pl-[14px] pt-[14px]  text-white text-start  opacity-60 h-[109px] w-full bg-white bg-opacity-5 rounded-[5px] border border-white border-opacity-20'
            />

            <button className='text-white text-[15px] h-[42px] bg-gradient-to-r from-[#763AF5] to-[#A604F2] font-medium flex justify-center items-center bg-[]'>
              Send it to the moon
              <img
                className='ml-[10px] object-contain'
                src={Rocket}
                alt='Rocket'
              />
            </button>
          </form>
        </div>
      </div>
      <DevTool control={control} />
    </section>
  );
};

export default Hero;
