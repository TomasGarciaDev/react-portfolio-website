import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {RiServiceLine} from 'react-icons/ri';
import {BiBook} from 'react-icons/bi';
import {BiMessageSquareDetail} from 'react-icons/bi';



export default function Nav() {
  return (
    <nav>
      <a href='#' className='active'><AiOutlineHome/></a>
      <a href='#about'><AiOutlineUser/></a>
      <a href='#experience'><RiServiceLine/></a>
      <a href='#portfolio'><BiBook/></a>
      <a href='#contact'><BiMessageSquareDetail/></a>
    </nav>
  )
}
