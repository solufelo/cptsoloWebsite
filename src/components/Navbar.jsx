import React, {useState} from 'react';
import{FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram, FaYoutube} from 'react-icons/fa';
import{HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo-helmet-TEXT.png'
import '../styles/navbar.css'
import{Link} from 'react-scroll'
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  return (
    <div className='fixed w-full h-[120px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo' style={{ width: '120px' }} />
      </div>
 
        {/* menu */}
            <div className="navbar-nav ml-auto">
            
                    <ul className="hidden md:flex">
                            <li> 
                              <Link to="home" smooth={true} duration={500} > 
                              Home
                              </Link>
                            </li>
                            <li><Link to="about" smooth={true} duration={500} > 
                              About
                              </Link></li>
                            <li><Link to="skills" smooth={true} duration={500} > 
                              Skills
                              </Link></li>
                            <li><Link to="work" smooth={true} duration={500} > 
                              Work
                              </Link></li>
                            <li><Link to="contact" smooth={true} duration={500} > 
                              Contact
                              </Link></li>
                    </ul>  
                      
            </div>
    

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
         {!nav ? <FaBars /> : <FaTimes />}
      </div>


        {/* mobile menu */}
        <div>
        <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500} > 
                              Home
                              </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500} > 
                              About
                              </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500} > 
                              Skills
                              </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500} > 
                              Work
                              </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500} > 
                              Contact
                              </Link></li>
        </ul>
        </div>
        {/* social icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href='https://www.linkedin.com/in/solufelo-undefined-854360241/'>
                    Linkedin <FaLinkedin size={30} />
                </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href='https://github.com/solufelo'>
                    Github <FaGithub size={30} />
                </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ff0037]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href='https://www.youtube.com/channel/UCZquv5HP4F4StIe1pIGisqQ'>
                    Youtube <FaYoutube size={30} />
                </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5188ff]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href='https://www.instagram.com/caaptainsolo/'>
                    Instagram <FaInstagram size={30} />
                </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href='mailto:solomonolufelo@outlook.com'>
                    Email <HiOutlineMail size={30} />
                </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href='https://drive.google.com/file/d/1smy2KW_AQ7FsMsNeLk_suqMATiy8wqu5/view?usp=sharing'>
                    Resume <BsFillPersonLinesFill size={30} />
                </a>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Navbar