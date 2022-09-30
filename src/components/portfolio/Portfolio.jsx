import './portfolio.css';
import MAPPIN from '../../assets/MAPPIN.png'

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My select work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={MAPPIN}></img>
          </div>
          <h3>MAPPIN</h3>
          <a href='https://github.com/TomasGarciaDev/world-map-game' className='btn' target='_blank' rel='noreferrer'>Github</a>
          <a href='https://mappin-game.herokuapp.com/' className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}
