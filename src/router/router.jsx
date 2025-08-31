import { createBrowserRouter } from "react-router";
import Layout from "../Layout";
import Home from "../components/Home/Home";
import Campaigns from "../components/Campaigns/Campaigns";
import CampaignDetails from "../components/CampaignDetails/CampaignDetails";
import SignUp from "../components/SignUp/SignUp";
import Login from "../components/Login/Login";
import Private from "../components/Private/Private";
import Profile from "../Profile/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    
    element: <Layout></Layout>,
    children:[
      {
        path:"/",
        loader:()=>fetch('/api/api.json'),
        element: <Home></Home>
      },
      {
        path:"/campaigns",
        loader:()=>fetch('/api/api.json'),
        element:<Campaigns></Campaigns>
        
      },
      {
        path:"/campaign/:id",
        loader:()=>fetch('/api/api.json'),
        element:<Private><CampaignDetails></CampaignDetails></Private>
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>

      },
      {
        path:"/login",
        element:<Login></Login>
      },{
        path:"/profile",
        element:<Private><Profile></Profile></Private>
      }
    ]
  }
]);

export default router;