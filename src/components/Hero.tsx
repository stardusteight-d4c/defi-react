import heroVid from '../assets/video.mp4'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className="w-full h-[100vh] top-0">
      <Navbar />
      <video
        className="object-cover h-full w-full absolute -z-10"
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
        <h1 className='md:text-6xl text-shadow-xl md:uppercase'>Decentralized</h1>
        <h1 className='py-2 md:text-4xl md:uppercase'><strong className='text-transparent bg-clip-text bg-gradient-to-l from-[#00feba] to-[#00abff]'>Trading</strong> Protocol</h1>
        <p className='text-2xl py-4 font-normal text-shadow-xl'>Guaranteed liquidity trading for millions of users and top Ethereum applications</p>
        <div>
          <button className='m-2'>Use Defi</button>
          <button className='m-2 bg-none border border-blue-300 text-blue-300'>FAQ</button>
        </div>
      </div>
      <div>
        <p className='text-center text-white text-2xl font-bold text-shadow-xl'>Total Volume Secured: $42,104,783,662.47</p>
      </div>
    </div>
  )
}

export default Hero
