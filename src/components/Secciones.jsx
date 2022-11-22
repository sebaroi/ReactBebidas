import { Link } from 'react-router-dom';
import './styles/secciones.css';
const Secciones = () => {
    return (
        <>
          <li className="nav-item">
          <Link to='/promociones/123' className="nav-link">PROMOCIONES </Link>
          </li>
          <li className="nav-item">
          <Link to='/category/VINOS' className="nav-link">VINOS</Link>
          </li>
          <li className="nav-item">
          <Link to='/category/CERVEZAS' className="nav-link">CERVEZAS</Link>
          </li>
          <li className="nav-item">
          <Link to='/category/APERITIVOS' className="nav-link">APERITIVOS</Link>
          </li>  
          <li className="nav-item">
          <Link to='/category/WISKIES' className="nav-link">WISKIES </Link>
          </li>
          <li className="nav-item">
          <Link to='/category/GIN' className="nav-link">GIN</Link>
          </li>
          <li className="nav-item">
          <Link to='/category/VODKA' className="nav-link">VODKA</Link>
          </li>
          <li className="nav-item">
          <Link to='/category/LICORES' className="nav-link">LICORES</Link>
          </li>  
        </>
    );
}

export default Secciones;
