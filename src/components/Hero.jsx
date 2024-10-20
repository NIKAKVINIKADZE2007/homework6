import React from 'react';
import { Rocket, Austonut } from '../assets';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

const Hero = () => {
  console.log(useForm());
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      LastName: '',
      FirstName: '',
      Email: '',
      PhoneNumber: '',
      Message: '',
    },
  });

  const Submit = () => {
    console.log('form has been Sumbited');
  };

  return (
    <section className='max-w-[1256px] mx-auto box-border w-full h-[576px] pl-[60px] pr-[184px] py-[20px] bg-white bg-opacity-[0.04] rounded-[20px]'>
      <div className='w-full  h-[536px] flex justify-between'>
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
          <form
            className='w-full h-[333px] flex flex-col justify-between'
            onSubmit={handleSubmit(Submit)}
          >
            <div className='w-full flex justify-between'>
              <input
                type='text'
                placeholder='Last Name'
                {...register('LastName', { required: 'Last Name is requerd' })}
                className='pl-[14px] mr-[14px] text-white w-full max-w-[206px] opacity-60 h-[42px] bg-white bg-opacity-5 rounded-[5px] border border-white border-opacity-20'
              />

              {errors.LastName && (
                <p className='text-white'>{errors.LastName.message}</p>
              )}
              <input
                type='text'
                placeholder='First Name'
                {...register('FirstName', { required: 'First Name is requed' })}
                className='pl-[14px] text-white max-w-[206px] w-full opacity-60 h-[42px] bg-white bg-opacity-5 rounded-[5px] border border-white border-opacity-20'
              />
              {errors.FirstName && (
                <p className='text-white'>Fist Name is requed</p>
              )}
            </div>
            <input
              type='text'
              placeholder='Email'
              id='Email'
              {...register('Email', {
                required: 'Email is requerd',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'not a valid Email',
                },
              })}
              className='pl-[14px]  text-white  opacity-60 h-[42px] w-full bg-white bg-opacity-5 rounded-[5px] border border-white border-opacity-20'
            />
            {errors.Email && (
              <p className='text-white'>{errors.Email.message}</p>
            )}

            <input
              type='number'
              placeholder='Phone Number'
              className='pl-[14px]  text-white  opacity-60 h-[42px] w-full bg-white bg-opacity-5 rounded-[5px] border border-white border-opacity-20'
              {...register('PhoneNumber', {
                required: 'Phone Number is required ',
                maxLength: {
                  value: 9,
                  message: 'number is to large',
                },
                minLength: {
                  value: 9,
                  message: 'number is to short',
                },
              })}
            />

            {errors.PhoneNumber && (
              <p className='text-white'>{errors.PhoneNumber.message}</p>
            )}
            <textarea
              maxLength={200}
              type='text'
              placeholder='Message'
              {...register('Message', {
                required: true,
              })}
              className='pl-[14px] pt-[14px]  text-white text-start  opacity-60 h-[109px] w-full bg-white bg-opacity-5 rounded-[5px] border border-white border-opacity-20'
            />
            {errors.Message && (
              <p className='text-white'>{errors.Message.message}</p>
            )}

            <button
              type='submit'
              className='text-white text-[15px] h-[42px] bg-gradient-to-r from-[#763AF5] to-[#A604F2] font-medium flex justify-center items-center bg-[]'
            >
              Send it to the moon
              <img
                className='ml-[10px] object-contain'
                src={Rocket}
                alt='Rocket'
              />
            </button>
          </form>
        </div>
        {/* Right Side */}
        <div
          className=' relative h-full max-w-[516px] w-full min-w-[200px]'
          style={{ backgroundImage: `${Austonut}` }}
        >
          <p className='absolute bottom-[73px] left-[28px] text-start text-white max-w-[466px] w-full opacity-70'>
            “Two lunar months revealed Earth's fragile beauty against vast
            silence, transforming my view of our place in the universe.
          </p>

          <p className='absolute bottom-[48px] left-[28px] text-start text-white max-w-[466px] w-full font-medium'>
            Irinel Traista
          </p>
        </div>
      </div>
      <DevTool control={control} />
    </section>
  );
};

export default Hero;
