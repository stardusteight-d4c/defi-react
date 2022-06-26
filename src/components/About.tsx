import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si'
import { VscServerProcess } from 'react-icons/vsc'
import AboutCard from './AboutCard'
import LightSpeed from 'react-reveal/LightSpeed'
import Fade from 'react-reveal/Fade'

const About = () => {
  return (
    <div className="w-full bg-[#000] text-white text-center mt-16">
      <div className="max-w-[1248px] mx-auto px-4 py-16">
        <div>
          <LightSpeed left>
            <h1 className="py-4 uppercase text-transparent bg-clip-text bg-gradient-to-l from-[#00feba] to-[#00abff]">
              A Growing Protocol Ecosystem
            </h1>
          </LightSpeed>
          <p className="m-11 text-xl">
            The Defi protocol system empowers developers, liquidity providers,
            and traders to participate in a financial marktplace that is open
            and accessible to all.
          </p>
          {/* Card Container */}
          <Fade bottom>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Card */}
              <AboutCard
                icon={<SiHiveBlockchain size={40} />}
                heading="Reliable, tamper-proof network"
                text="Use decentralization, trusted nodes, premium data, and
        cryptographic proofs to connect highly accurate and available
        data/APIs to any smart contract."
              />

              <AboutCard
                icon={<SiFsecure size={40} />}
                heading="Seamless connection to any API"
                text="Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain."
              />
              <AboutCard
                icon={<SiStrapi size={40} />}
                heading="Proven, ready-made solutions"
                text="Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications."
              />
              <AboutCard
                icon={<VscServerProcess size={40} />}
                heading="Secure off-chain computation"
                text="Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers."
              />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default About
