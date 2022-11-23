import { Link } from 'react-router-dom';
import './styles/secciones.css';
const Secciones = () => {
    return (
        <>
          <li className="nav-item">
          <Link to='/promociones/123' className="nav-link">PROMOCIONES </Link>
          </li>
          <li className="nav-item">
          <Link to='/category/Vinos' className="nav-link">VINOS</Link>
          </li>
          <li className="nav-item">
          <Link to='/category/Cervezas' className="nav-link">CERVEZAS</Link>
          </li>
          <li className="nav-item">
          <Link to='/category/Aperitivos' className="nav-link">APERITIVOS</Link>
          </li>  
          <li className="nav-item">
          <Link to='/category/Wiskies' className="nav-link">WISKIES </Link>
          </li>
          <li className="nav-item">
          <Link to='/category/Gin' className="nav-link">GIN</Link>
          </li>
          <li className="nav-item">
          <Link to='/category/VODKA' className="nav-link">VODKA</Link>
          </li>
          <li className="nav-item">
          <Link to='/category/Licores' className="nav-link">LICORES</Link>
          </li>  
        </>
    );
}

export default Secciones;
