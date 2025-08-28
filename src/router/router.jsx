import { createBrowserRouter } from "react-router";
import Layout from "../Layout";
import Home from "../components/Home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    
    element: <Layout></Layout>,
    children:[
      {
        path:"/",
        loader:()=>fetch('/api/api.json'),
        element: <Home></Home>
      }
    ]
  }
]);

export default router;