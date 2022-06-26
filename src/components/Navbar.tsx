import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='m-4 bg-black md:absolute md:bg-inherit'>
      <div className="px-4 flex justify-between items-center">
        <div className='top-[0px] md:left-12 md:absolute cursor-pointer'>
         <img src={logo} width={80} height={80} />
        </div>
        <div className="hidden md:flex md:pl-[105%] md:mt-[13px]">
          <ul className="flex text-white items-center">
            <li className='cursor-pointer font-medium text-lg transition duration-500 ease-in-out hover:scale-110 hover:text-shadow-xl'>Platform</li>
            <li className='cursor-pointer font-medium text-lg transition duration-500 ease-in-out hover:scale-110 hover:text-shadow-xl'>Developers</li>
            <li className='cursor-pointer font-medium text-lg transition duration-500 ease-in-out hover:scale-110 hover:text-shadow-xl'>Community</li>
            <li className='cursor-pointer font-medium text-lg transition duration-500 ease-in-out hover:scale-110 hover:text-shadow-xl'>About</li>
            <button className="ml-4 w-[135px] font-medium text-lg">Use Defi</button>
          </ul>
        </div>

        {/* Hamburguer Menu */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>

        {/* Mobile Menu */}
        <div className={nav ? 'w-full h-[100vh] bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 'absolute left-[-100%]'}>
          <ul>
            <li className="text-2xl">Platform</li>
            <li className="text-2xl">Developers</li>
            <li className="text-2xl">Community</li>
            <li className="text-2xl">About</li>
            <button className="m-8">Use Defi</button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
