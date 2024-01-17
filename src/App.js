import './App.css';
import NavRoutes from './NavRoutes'
import VendingMachine from './VendingMachine'
import { Link, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
