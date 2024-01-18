import './App.css';
import NavRoutes from './NavRoutes'
import VendingMachine from './VendingMachine'
import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <div>
      <HashRouter>
        <NavRoutes />
      </HashRouter>
    </div>
  );
}

export default App;
