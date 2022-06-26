import About from './components/About'
import Developers from './components/Developers'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Subscribe from './components/Subscribe'
import Flip from 'react-reveal/Flip'
import Zoom from 'react-reveal/Zoom'

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Flip top>
        <Developers />
      </Flip>
      <Zoom bottom>
        <Subscribe />
      </Zoom>
      <Footer />
    </div>
  )
}

export default App
