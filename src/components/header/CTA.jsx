import CV from '../../assets/Tomas Garcia_English_CV.pdf'

export default function CTA() {
  return (
    <div className="cta">
      <a href={CV} download>Download CV</a>
      <a href="#contact">Contact</a>
    </div>
  )
}
