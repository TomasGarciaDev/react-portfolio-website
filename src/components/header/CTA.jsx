import CV from '../../assets/Tomas Garcia_English_CV.pdf'

export default function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Contact</a>
    </div>
  )
}
