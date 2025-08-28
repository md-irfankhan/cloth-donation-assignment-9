import { createBrowserRouter } from "react-router";
import Layout from "../Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:"/",
        element: <div>Hello</div>
      }
    ]
  }
]);

export default router;