import {FiLinkedin} from 'react-icons/fi';
import {FiGithub} from 'react-icons/fi'

export default function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/tomas-garcia-64b145102/" target="_blank" rel="noreferrer"><FiLinkedin/></a>
      <a href="https://github.com/TomasGarciaDev" target="_blank" rel="noreferrer"><FiGithub/></a>
    </div>
  )
}
