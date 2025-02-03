/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


/**
 * Components
 */
import ReviewCard from "./ReviewCard";


const reviews = [
  {
    content: 'Youll never see a discord like this one. forget the signals for a sec, the community and content alone are 10 times their weight in gold. not only that but u get a founder whos willing to describe everything to you in detail. 10/10 would recommend',
    name: '0xbean',
    imgSrc: '/images/0xbean.jpg',
    company: 'Funded Trader'
  },
  
 
  {
    content: 'This place  Most likely will help you remove all clutter from  your trading strategy and make it as simple as making cup noodles in 1 minute.',
    name: 'Gummy',
    imgSrc: '/images/gummy.jpg',
    company: 'Trader'
  },
  {
    content: 'The greatest discord channel to exist the only legit person who trades live his funded accounts and @Cusi is always there to answer any questions he is super kind and helpful glad to be part of this community',
    name: 'deathg',
    imgSrc: '/images/deathg.jpg',
    company: 'Member'
  },
  {
    content: 'i know the technical part,mypsychology was all over the place.Cusi helped me stabilize my shit & give me a vision for me that i can do it i just need patience & just pure focus. 100% recommend if you doubt joining & trust i was doubting too. literally only guy you need to become a profitable trader.',
    name: 'Batman',
    imgSrc: '/images/batman.jpg',
    company: 'Funded Trader'
  },
  {
    content: 'Youll never see a discord like this one. forget the signals for a sec, the community and content alone are 10 times their weight in gold. not only that but u get a founder whos willing to describe everything to you in detail. 10/10 would recommend',
    name: '0xbean',
    imgSrc: '/images/0xbean.jpg',
    company: 'Funded Trader'
  },
  {
    content: 'A cabal full of professional experts that guarantee exponential growth in your development as a trader. They’ll have you grinning in no time.',
    name: 'stan_0',
    imgSrc: '/images/stan0.jpg',
    company: 'Trader'
  }
];


const Review = () => {

  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '-200% 80%',
        end: '400% 80%',
        scrub: true
      },
      x: '-1000'
    })
  });

  return (
    <section
      id="reviews"
      className="section overflow-hidden"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          What our customers say
        </h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Review