import 'bootstrap/dist/css/bootstrap.min.css';
import FormSearch from './FormSearch';
import Secciones from './Secciones';
import CartWidget from './CartWidget';
import logoRash from '../components/imagenes/logoChico1.png';
import navBar from './styles/navBar.css';
import { Navbar, Container, Nav, button} from 'react-bootstrap';




function NatBar() {
  return (
    <div>
      <nav className="banner navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> 
          <div className='logoRash'>
            <img 
              src={logoRash} 
              alt='logo de Rash' />
          </div> </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <Secciones />
            </ul>
            <div>
              <CartWidget />
            </div>
            <FormSearch busqueda='Buscar Producto' TextoBoton='Buscar'/>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NatBar;
