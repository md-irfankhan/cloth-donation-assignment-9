import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../Spinner/Spinner';

const Private = ({children}) => {
    const location=useLocation()
    const {user,loading}=useContext(AuthContext)
    console.log(loading);
    
    if(loading){
        return <Spinner></Spinner>
    }
    if(user){
        return children
    }
    return (
        <div>
            <Navigate state={location.pathname} to={"/login"}></Navigate>
        </div>
    );
};

export default Private;