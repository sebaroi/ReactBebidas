
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from 'react-bootstrap';
import NatBar from '../src/components/NatBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import {faFontAwesomeIcon} from '@fortawesome/free-solid-svg-icons';
import "./App.css";
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <ItemListContainer />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
