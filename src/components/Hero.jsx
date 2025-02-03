/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from "./Button";


const Hero = () => {
  return (
    <section
      id="home"
      className="pt-28 lg:pt-36"
    >
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

        <div>
          <div className="flex items-center gap-3">

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>

              Your One way ticket to profitable Trading 
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
           CANDLE GAP THEORY
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              label="ENROLL"
              icon=""
            />

            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>

          {/* Video for small screens */}
          <div className="block lg:hidden mt-8">
            <figure className="w-full bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/cApveEWHPA4?si=n8uL_v0NCzugtdak"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full"
              ></iframe>
            </figure>
          </div>
        </div>

        {/* Video for large screens */}
        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/cApveEWHPA4?si=n8uL_v0NCzugtdak"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full"
            ></iframe>
          </figure>
        </div>

      </div>

    </section>
  )
}

export default Hero