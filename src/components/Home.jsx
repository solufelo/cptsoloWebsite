import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi"
import '../styles/navbar.css'
import{Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>
        {/* Conatiner */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#ffbd62]'> Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#bdecff]'>Solomon Olufelo</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#7193b9]'>I'm your all around guy. </h2>
            <p className='text-[#7193b9] py-4 max-w-[700px]'>Videography, photography, music production, graphic design, and editing are some of my specialties. 
            At the moment, my main goal is to become a full-stack developer and finish my Computer Science degree at Wifrid Laurier University.</p>
            <div> 
              <li>
                <Link to="work" smooth={true} duration={500} >
                  <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ffbd62] hover:border-[#ffbd62]'>
                  View Work
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3  ' />
                    </span>
                  </button>
              </Link>
            </li>
          </div>
        </div>
        
    </div>
  )
}

export default Home