import About from './components/About'
import Developers from './components/Developers'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Subscribe from './components/Subscribe'
import Fade from 'react-reveal/Fade'

function App() {
  return (
    <div>
      <Hero />
      <About />
        <Developers />
      <Fade top>
        <Subscribe />
      </Fade>
      <Footer />
    </div>
  )
}

export default App
