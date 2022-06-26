type AboutCard = {
  icon: any
  heading: string
  text: string
}

const AboutCard = (props: AboutCard) => {
  return (
    <div className="flex flex-col text-left rounded-[25px] py-10 px-8">
      <div>
        <div className="bg-[#bebebe1e] text-[white] inline-flex p-3 rounded-full">
          {props.icon}
        </div>
        <h3 className="text-xl font-bold py-4 uppercase text-transparent bg-clip-text bg-gradient-to-l from-[#00feba] to-[#00abff]">
          {props.heading}
        </h3>
        <p>
          {props.text}
        </p>
      </div>
    </div>
  )
}

export default AboutCard
