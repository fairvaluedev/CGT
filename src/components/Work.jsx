


/**
 * Components
 */
import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: '/images/alpha.jpg',
    title: 'AlphaCapital',
    tags: [],
    projectLink: 'https://x.com/0xCusi/status/1883868030385709335'
  },
  {
    imgSrc: '/images/funded_next.jpg',
    title: 'Funded Next',
    tags: [],
    projectLink: 'https://x.com/0xCusi/status/1883868030385709335'
  },
  {
    imgSrc: '/images/mffu.png',
    title: 'MyFundedFutures',
    tags: [],
    projectLink: 'https://x.com/0xCusi/status/1854994798958072028'
  },
  {
    imgSrc: '/images/topstep.jpg',
    title: 'TopStep',
    tags: [],
    projectLink: 'https://x.com/0xCusi/status/1882767768187195869'
  },
  {
    imgSrc: '/images/alpha2.jpg',
    title: 'AlphaCapital',
    tags: [],
    projectLink: 'https://x.com/0xCusi/status/1848395250508677404'
  },
  {
    imgSrc: '/images/alpha3.jpg',
    title: '#1 on Leaderboard',
    tags: [],
    projectLink: 'https://x.com/0xCusi/status/1848395250508677404'
  },
];


const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
         Recent Payouts
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work