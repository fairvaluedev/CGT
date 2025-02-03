/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


const aboutItems = [
  {
    label: 'Total Payouts',
    number: 155000
  },
  {
    label: 'Years of experience',
    number: 5
  }
];


const About = () => {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container">

        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">          Discover how I earned $15,000 per month as a part-time trader using just this method. 
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">


          Most of you know me as “Cusi.” I am a 24-year-old day trader currently residing in North America. I hold a college degree and have a full-time job, and I’m fortunate to be able to work from home while still trading. I started trading about 2-3 years ago, and it wasn’t easy. I quickly realized that I needed to take it seriously and focus on a system that would make me profitable. Fast forward two years, and I am now funded by multiple prop firms, consistently making roughly 4-8% monthly. I was never the brightest, but if I can do it, so can you. I’m here to support and guide you every step of the way on your trading journey.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }

            <img
              src="/images/image.svg"
              alt="Logo"
              width={80}
              height={80}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About