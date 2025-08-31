
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, Navigate, useNavigate } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLocation } from 'react-router';
const Login = () => {
    const location=useLocation()
    const navigate=useNavigate()
    const [forgetEmail,setForgetEmail]=useState("")
    const {setUser,loginUser,googleUser,user,forgetPass}=useContext(AuthContext)
    if(user){
        return <Navigate to={location.state?location.state:'/'}></Navigate>
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')
        loginUser(email,password)
        .then(res=>{
            setUser(res.user)
            toast.success("Login Successfull")
            navigate(location.state?location.state:'/')
        })
        .catch(err=>{
            toast.error("Login Failed")
        })

    }
    const handleEmail=(e)=>{
        setForgetEmail(e.target.value)
        // console.log(e.target.value);
        

    }

    const handleForget =()=>{
          forgetPass(forgetEmail).then(res=>{
            toast.success("Reset Email Sent")
          }).catch(err=>{
            toast.error("Sent Email Failed")
            console.log(err);
            
          })
    }
    console.log(user);
    console.log(location?.state);
    
    const handleGoogle=()=>{
          googleUser()
          .then(res=>{
            setUser(res.user)
            toast.success("Login Successfull")
            navigate(location?.state)

          }).catch(err=>{
            toast.error("Login Failed")
          })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                               
                                <label className="label">Email</label>
                                <input name='email' onChange={handleEmail} type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input name='password' type="password" className="input" placeholder="Password" />
                                <div><a onClick={handleForget} className="link link-hover text-blue-400">Forget Password</a></div>
                                <div>Don't have account? <Link state={location?.state} to={'/signup'} className="link link-hover text-blue-400">SignUp Now</Link></div>
                                <input type='submit' value={'Login'} className="btn btn-neutral mt-4"></input>
                            </fieldset>
                        </form>
                        <div class="divider">OR</div>

                        <button onClick={handleGoogle} class="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;