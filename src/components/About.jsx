import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#ffbd62]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-5'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Solomon, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about creating many types of media, primarily focused on/around music.
                    I specialise in music videos and music production and consider myself an asset to your team.
                    Don't you want someone who is adaptable and possesses a variety of excellent qualities to be available?
                    In the work section, you can view all of the many types of work I've done in the past.</p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default About