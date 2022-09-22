import './header.css';
import CTA from './CTA';
import ME from '../../assets/ME_header.png'

export default function Header() {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello,  I am</h5>
        <h1>Tomás García</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />

        <div className='me'>
          <img src={ME} />
        </div>
      </div>
    </header>
  )
}
