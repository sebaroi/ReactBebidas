
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from 'react-bootstrap';
import NatBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import {faFontAwesomeIcon} from '@fortawesome/free-solid-svg-icons';
import "./App.css";
import Item from './components/Item';
import { Layout } from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
      <ItemListContainer />
      </Layout>
    </div>
  );
}

export default App;
