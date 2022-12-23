import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router =  createBrowserRouter([
  {
    path:"/",
    element: <span>Home</span>
  },
  {
    path:"/products/:id",
    element: <span>Category</span>
  },
   {
    path:"/product/:id",
    element: <span>Product</span>
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
