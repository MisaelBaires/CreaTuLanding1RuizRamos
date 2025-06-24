import remera from '../assets/remera.webp'
import './galeria.css'

const Galeria = (props) => {
  return (
    <div>
        <section>
        <h2>{props.texto}</h2>
        <div className="galeria">
          <a href="" target="_blank"><img src={remera} alt="remera" /></a>
          <a href="" target="_blank"><img src={remera} alt="remera" /></a>
          <a href="" target="_blank"><img src={remera} alt="remera" /></a>
          <a href="" target="_blank"><img src={remera} alt="remera" /></a>
        </div>
      </section>
    </div>
  )
}

export default Galeria