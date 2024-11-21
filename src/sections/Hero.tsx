import memojiImage from '@/assets/images/memoji-computer.png';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0'>
      <div
        className='absolute inset-0 -z-30 opacity-5'
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className='size-[620px] hero-ring'></div>
      <div className='size-[820px] hero-ring'></div>
      <div className='size-[1020px] hero-ring'></div>
      <div className='size-[1220px] hero-ring'></div>
      <div className='container'>
        <div className='flex flex-col items-center '>
          <Image
            src={memojiImage}
            className='size-[100px]'
            alt='Person with a laptop'
          />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4'>
            <div className='bg-green-500 rounded-full size-2.5'></div>
            <div className='text-sm font-md'>Available for new projects</div>
          </div>
        </div>
        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-3xl md:text-4xl text-center mt-8 tracking-wide'>
            Building Exceptional User Experiences.
          </h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>
            I specialize in transforming your ideas into functional
            high-performing web applications. Contact me so we can discuss your
            next project.
          </p>
        </div>
        <div className='gap-4 flex flex-col md:flex-row justify-center items-center mt-8'>
          <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
            <span className='font-semibold'>Explore my work</span>
            <ArrowDown className='size-4' />
          </button>
          <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
            <span className=''>👋</span>
            <span className='font-semibold'>Let&apos;s connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
