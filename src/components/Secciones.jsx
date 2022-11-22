import { Link } from 'react-router-dom';
import './styles/secciones.css';
const Secciones = () => {
    return (
        <>
          <li className="nav-item">
          <Link to='/promociones/123' className="nav-link " href="#">PROMOCIONES </Link>
          </li>
          <li className="nav-item">
          <Link to='/category/vinos' className="nav-link" href="#">VINOS</Link>
          </li>
          <li className="nav-item">
          <Link to='/category/cervezas' className="nav-link" href="#">CERVEZAS</Link>
          </li>
          <li className="nav-item">
          <Link to='/category/aperitivos' className="nav-link" href="#">APERITIVOS</Link>
          </li>  
          <li className="nav-item">
          <Link to='/category/wiskies' className="nav-link " href="#">WISKIES </Link>
          </li>
          <li className="nav-item">
          <Link to='/category/gin' className="nav-link" href="#">GIN</Link>
          </li>
          <li className="nav-item">
          <Link to='/category/vodka' className="nav-link" href="#">VODKA</Link>
          </li>
          <li className="nav-item">
          <Link to='/category/licores' className="nav-link" href="#">LICORES</Link>
          </li>  
        </>
    );
}

export default Secciones;
