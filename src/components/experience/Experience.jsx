import './experience.css';
import {AiFillCheckCircle} from 'react-icons/ai'

export default function Experience() {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <AiFillCheckCircle />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle />
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle />
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle />
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle />
              <h4>Tailwind</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle />
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle />
              <h4>Next</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
        {/* END OF FRONT END */}

        <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <AiFillCheckCircle />
              <h4>Node JS</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle />
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle />
              <h4>PHP</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle />
              <h4>MySQL</h4>
              <small className='text-light'>Basic</small>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle />
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
