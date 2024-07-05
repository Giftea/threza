import React, {useState} from 'react'
import {HiMenuAlt4} from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link} from "react-router-dom";
import logo from '../images/logo.png'

const NavbarItem = ({title,link, classProp}) => {
    return (
        <Link to={link} className={`mx-4 cursor-pointer ${classProp}`}>
            {title}
        </Link>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <nav className='w-full flex lg:pl-20 px-5 justify-between items-center py-4'>
           <div className='md:flex-[0.5] flex-initial justify-center items-center'>
               <Link to='/'>
               <img src={logo} alt ='Threza' className='w-32 cursor-pointer' />
               
               </Link>
           </div>
{/*            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
             <Link to ='/News' className="text-white text-base text-center navlink mx-5 cursor-pointer">News</Link>
             <Link to='/Exchanges' className="text-white text-base text-center navlink mx-5 cursor-pointer">Exchanges</Link>
                <Link to='/Cryptocurrencies' className="text-white text-base navlink text-center mx-5 cursor-pointer">Cryptocurrencies</Link>
           </ul> */}
           <div className="flex relative">
               {
                   toggleMenu ?
                   <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(false) } /> :
                   <HiMenuAlt4  fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(true) } />
               }
               {
                   toggleMenu && (
                       <ul
                       className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                       flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'
                       >
                           <li className='text-xl w-full my-2'>
                                <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(false) } />
                           </li>
                             <Link to ='/News' className="mx-4 my-2 text-lg cursor-pointer">News</Link>
                             {/* <Link to='/Exchanges' className="mx-4 my-2 text-lg cursor-pointer">Exchanges</Link>
                             <Link to='/Cryptocurrencies' className="mx-4 my-2 text-lg cursor-pointer">Cryptocurrencies</Link> */}
                       </ul>
                   )
               }
           </div>
        </nav>
    )
}

export default Navbar
