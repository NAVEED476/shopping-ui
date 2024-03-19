import logo from './logo.svg';
import './App.css';
import Pay from './components/Pay';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import ProductInfo from './Pages/ProductInfo';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Cart from './Pages/Cart';

import {createBrowserRouter, RouterProvider, redirect} from "react-router-dom";
import NavbarRoutes from './components/NavbarRoutes';
const user = true;

const routes = createBrowserRouter([ 
  {
    element: <NavbarRoutes/>,
    children: [
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/login",
        element: user ? <redirect to="/" /> : <Login/>
      }
    ]
  },
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/product/:id",
    element: <ProductInfo/>
  },
  {
    path: "/products/:women",
    element: <ProductList/>
  },
  {
    path: "/cart",
    element: <Cart/>
  }
]);
function App() {
  return (
    <RouterProvider router={routes}>
    <div className="App" >
      {/* <Pay/> */}
      {/* <Home/> */}
      {/* <ProductList/> */}
      {/* <ProductInfo/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Cart/> */}
    </div>
    </RouterProvider>
  );
}

export default App;
