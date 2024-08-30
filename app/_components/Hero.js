import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg from '../../public/hero.png';

function Hero() {
  return (
    <section className='overflow-hidden bg-gray-100 '>
      <Image
        src={bg}
        alt='Learning'
        fill
        className='object-cover object-top '
        placeholder='blur'
      />
      <div className='absolute inset-0 bg-black bg-opacity-40'></div>

      <div className='relative z-10 flex flex-col h-full'>
        <main className='flex flex-col items-center justify-center flex-grow px-4 text-center'>
          <h1 className='mb-6 text-3xl font-bold text-white md:text-5xl'>
            Learn To Code{' '}
            <span className='text-blue-600'>With a Job Guarantee</span> At The
            Best Price Available for{' '}
            <span className='text-[#8297f3]'>Southeast Asians</span>!
          </h1>
          <button className='px-6 py-2 text-lg font-semibold text-black transition bg-white rounded-full hover:bg-opacity-90'>
            Let's start
          </button>
        </main>

        <footer className='p-4'>
          <div className='max-w-md p-4 mx-auto bg-white rounded-lg bg-opacity-20 backdrop-blur-lg'>
            <p className='text-center text-white'>
              Get{' '}
              <span className='text-[#3f3fad] font-semibold'>
                HeyLearn2Code
              </span>{' '}
              for an all-in-one coding bootcamp experience right on your
              schedule
            </p>
          </div>
        </footer>
      </div>

      <div className='absolute text-white bottom-4 left-4'>
        <p>HeyLearn2Code, Malaysia</p>
        <p className='text-4xl font-bold'>20°C</p>
        <p>It's Coding Time</p>
      </div>
    </section>
  );
}

export default Hero;
