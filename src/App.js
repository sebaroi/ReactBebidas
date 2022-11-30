
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from './components/ItemListContainer';
import "./App.css";
import { Layout } from "./components/Layout";
/* import {cartContext} from './context/cartContext'; */

function App() {
  return (
///*     <cartContext.Provider value={[]}> */
      <div className="App">
        <Layout>
          <ItemListContainer />
        </Layout>
      </div>
//{/*     </cartContext.Provider> */}
  );
}

export default App;
