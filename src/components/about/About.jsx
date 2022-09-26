import "./about.css";
import ME from '../../assets/ME_about.png';

export default function About() {
  return (
    <section id='about'>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className={ME}>
          <img src={ME} alt=''/>
        </div>
      </div>

        <div className='about_content'>

        </div>
    </section>
  )
}
