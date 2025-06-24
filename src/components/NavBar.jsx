import "./navbar.css";
import logo from '../assets/image.png'
import Carrito from './CartWidget'

const NavBar = () => {
  return (
    <div className="wrap">
      <div>
        <img className="logo-carrito" src={logo} alt="A gray skull"/>
      </div>
      <div>
        <nav className="navbar wrap">
          <ul>
            <li>
              <a className="" href="">
                Nuevo
              </a>
            </li>
            <li>
              <a className="" href="">
                Prendas
              </a>
            </li>
            <li>
              <a className="" href="">
                Mujer
              </a>
            </li>
            <li>
              <a className="" href="">
                Hombre
              </a>
            </li>
            <li>
              <a className="" href="">
                AYUDA
              </a>
            </li>
            <li>
              <a className="" href="">
                CONTACTANOS
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="carrito">
       <Carrito/>
      </div>
    </div>
  );
};

export default NavBar;
