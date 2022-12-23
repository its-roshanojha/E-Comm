import {createBrowserRouter, RouterProvider,Route,Link, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import "./app.scss"

// creating Layouts
const Layouts = () => {
  return(
    <div className="app">
      <Navbar/>
      <Outlet /> {/* It represents our different pages  */}
      <Footer />
    </div>
  )
}


// creating router here
const router =  createBrowserRouter([
  {
    path:"/",
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/products/:id",
        element: <Products/>
      },
      {
        path: "/product/:id",
        element: <Product/>
      }
    ]
  }
])

function App() {
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
