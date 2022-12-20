import 'bootstrap/dist/css/bootstrap.min.css';
import FormSearch from './FormSearch';
import Secciones from './Secciones';
import CartWidget from './CartWidget';
import logo from '../imagenes/logoNeon.png';
import './styles/navBar.css';
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <div>
      <nav className="banner navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid color todoAncho">
          <Link  to='/' className="navbar-brand" > 
          <div className='logoRash'>
            <img 
              src={logo} 
              alt='logo' />
          </div> </Link>
          <div className="collapse navbar-collapse">
            <div >
            <FormSearch busqueda='Da para tomar.....' TextoBoton='Buscar'/>
            <ul className="navbar-nav me-auto">
              <Secciones />
            </ul>
            </div>
            <div>
              <CartWidget />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
