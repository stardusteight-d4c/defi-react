type AboutCard = {
  icon: any
  heading: string
  text: string
}

const AboutCard = (props: AboutCard) => {
  return (
    <div className="flex flex-col border text-left rounded-2xl py-12 px-8">
      <div>
        <div className="bg-blue-300 inline-flex p-2 rounded-full">
          {props.icon}
        </div>
        <h3 className="text-xl font-bold py-4">
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
