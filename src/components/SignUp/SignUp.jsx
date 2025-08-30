import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
    const { createUser, userProfileUpdate } = useContext(AuthContext)
    const handleSignUp = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        createUser(email, password)
            .then(res => {
                userProfileUpdate(name, photo).then(res => {
                    toast.success("User SignUp Successfull")
                }).catch(err => {
                    toast.error("SignUp Failed")
                })
            }).catch(err => {
                toast.error("SignUp Failed")
            })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSignUp}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input name='name' type="text" className="input" placeholder="Name" />
                                <label className="label">Photo Url</label>
                                <input name='photo' type="text" className="input" placeholder="Photo Url" />
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input name='password' type="password" className="input" placeholder="Password" />
                                <div>Already Registered? <Link to={'/login'} className="link link-hover text-blue-400">Login Now</Link></div>
                                <input type='submit' value={'SignUp'} className="btn btn-neutral mt-4"></input>
                            </fieldset>
                        </form>
                        <div class="divider">OR</div>

                        <button class="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;