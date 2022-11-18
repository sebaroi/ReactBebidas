
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from 'react-bootstrap';
import NatBar from '../src/components/NatBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import {faFontAwesomeIcon} from '@fortawesome/free-solid-svg-icons';
import "./App.css";
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <NatBar />
      <ItemListContainer />
      <Footer />
    </div>
  );
}

export default App;
