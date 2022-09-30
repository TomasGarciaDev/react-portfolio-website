import './experience.css';
import {AiFillCheckCircle, AiFillHtml5} from 'react-icons/ai';
import {IoLogoCss3} from 'react-icons/io';
import {SiJavascript, SiBootstrap, SiTailwindcss,SiNextdotjs, SiMongodb, SiPostgresql} from 'react-icons/si';
import {GrReactjs, GrNode} from 'react-icons/gr';

export default function Experience() {
  return (
    <section id='experience'>
      {/* <h5>The Skills I Have</h5> */}
      <h2 className='htwo'>My Experience</h2>
      <h5 className='hfive'>These are the technologies I have worked with</h5>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>

            <article className='experience__details'>
              <IoLogoCss3 className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

            <article className='experience__details'>
              <SiJavascript className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>

            <article className='experience__details'>
              <SiBootstrap className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>

            <article className='experience__details'>
              <SiTailwindcss className='experience__details-icon'/>
              <div>
                <h4>Tailwind</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>

            <article className='experience__details'>
              <GrReactjs className='experience__details-icon'/>
              <div>
                <h4>React JS</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>

            <article className='experience__details'>
              <SiNextdotjs className='experience__details-icon'/>
              <div>
                <h4>Next</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONT END */}

        <div className='experience__backend'>
        <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <GrNode className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>

            <article className='experience__details'>
              <SiMongodb className='experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

            <article className='experience__details'>
              <SiPostgresql className='experience__details-icon'/>
              <div>
                <h4>PostgreSQL</h4>
                {/* <small className='text-light'>Basic</small> */}
              </div>
            </article>

            <article className='experience__details'>
              <SiNextdotjs className='experience__details-icon'/>
              <div>
                <h4>Next JS</h4>
                {/* <small className='text-light'>Basic</small> */}
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}
