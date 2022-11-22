import 'bootstrap/dist/css/bootstrap.min.css';
import FormSearch from './FormSearch';
import Secciones from './Secciones';
import CartWidget from './CartWidget';
import logoRash from '../components/imagenes/logoNeon.png';
import navBar from './styles/navBar.css';
import { Navbar, Container, Nav, button} from 'react-bootstrap';




function NavBar() {
  return (
    <div>
      <nav className="banner navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid color">
          <a className="navbar-brand" href="#"> 
          <div className='logoRash'>
            <img 
              src={logoRash} 
              alt='logo de Rash' />
          </div> </a>
          <div className="collapse navbar-collapse">
            <div >
            <FormSearch busqueda='Buscar Producto' TextoBoton='Buscar'/>
            <ul className="navbar-nav me-auto">
              <Secciones />
            </ul>
            </div>

{/*             <ul className="navbar-nav me-auto">
              <Secciones />
            </ul> */}
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
