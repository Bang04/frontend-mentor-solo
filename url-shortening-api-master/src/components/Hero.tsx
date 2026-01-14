import heroimage from "../assets/images/illustration-working.svg";

const Hero = () => {
return(
     <section className="overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center gap-10">
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          More than just shorter links
        </h1>
        <p className="text-gray-500 mt-4">
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </p>
        <a href="#" className="inline-block mt-6 bg-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-600">
          Get Started
        </a>
      </div>

      <div className="md:w-1/2">
        <img src={heroimage} alt="Hero image" className="w-full" />
      </div>
    </div>
  </section>
)
}

export default Hero;