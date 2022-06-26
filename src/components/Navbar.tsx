import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='md:absolute m-4'>
      <div className="px-4 flex justify-between items-center">
        <div>
          <h1 className="text-[#00d8ff]">DEFI</h1>
        </div>
        <div className="hidden md:flex md:pl-[97%]">
          <ul className="flex text-white items-center">
            <li className='cursor-pointer'>Platform</li>
            <li className='cursor-pointer'>Developers</li>
            <li className='cursor-pointer'>Community</li>
            <li className='cursor-pointer'>About</li>
            <button className="ml-4 w-[124px]">Use Defi</button>
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
        <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 'absolute left-[-100%]'}>
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
