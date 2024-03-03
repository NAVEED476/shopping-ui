import logo from './logo.svg';
import './App.css';
import Pay from './components/Pay';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import ProductInfo from './Pages/ProductInfo';
import Register from './Pages/Register';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      {/* <Pay/> */}
      {/* <Home/> */}
      {/* <ProductList/> */}
      {/* <ProductInfo/> */}
      <Register/>
      <Login/>
    </div>
  );
}

export default App;
