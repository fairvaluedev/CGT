/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


/**
 * Components
 */
import SkillCard from "./SkillCard";


const skillItem = [

  {
    imgSrc: '/images/fundednextlogo.jpg',
    label: 'FundingNext',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/alphalogo.jpg',
    label: 'AlphaCapital',
    desc: ''
  },
  {
    imgSrc: '/images/topsteplogo.jpg',
    label: 'Topstep',
    desc: ''
  },
  {
    imgSrc: '/images/mglogo.png',
    label: 'MyFundedFutures',
    desc: ''
  }
];


const Skill = () => {
  return (
    <section className="section">
      <div className="container">

        <h2 className="headline-2 reveal-up">
         6 Figure Funded Trader
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
         Funded and Recognized by Multiple Leading Prop Firms in the Trading Space
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes="reveal-up"
              />
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default Skill