import terminal from '../assets/terminal.png'

const Developers = () => {
  return (
    <div className="w-full text-white bg-[#070808]">
      <div className="max-w-[1240px] mx-auto px-4 py-16 md:flex">
        <div>
          <h1>Superpowers for DEFI developers.</h1>
          <p>
            Checkout the{' '}
            <strong className="text-blue-300">documentation</strong>, the{' '}
            <strong className="text-blue-300">quick start</strong> or a guide
            below to integrate your project with thousands of tokens and
            billions of liquidity.
          </p>
        </div>
        <div className='flex justify-center w-full md:justify-end py-16 md:py-0'>
          <img className='max-w-[250px] shadow-lg shadow-blue-300/50' src={terminal} />
        </div>
      </div>
    </div>
  )
}

export default Developers
