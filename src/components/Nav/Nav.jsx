import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Nav = () => {
    const { user ,signOutUser} = useContext(AuthContext)
    const handleLogOut=()=>{
        signOutUser()
        .then(res=>{
            toast.success("LogOut Success")
        })
        .catch(err=>{
            toast.error("LogOut unsuccessfull")
        })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/campaigns'}>Campaign</Link></li>



                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Winter Cloth Donation</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/campaigns'}>Campaign</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={user.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li>
                                    <Link to={'/profile'} className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                
                                <li><a onClick={handleLogOut}>Logout</a></li>
                            </ul>
                        </div>



                    </>:<Link to={'/login'} className="btn">Login</Link>
                
            }
                
            </div>
        </div>
    );
};

export default Nav;