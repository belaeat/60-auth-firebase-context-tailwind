import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Login = () => {

    const { signIn, signInWithGoogle } = useContext(AuthContext)

    const handleLogin = event => {
        // stop reloading the page
        event.preventDefault();

        // collecting user data
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        // signing in user
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset()
            })
            .catch(error => {
                console.log(error);
            })
    }

    // signing in with google
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Login!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='mb-4 ml-8'>
                        <Link to='/register' href="#" className="label-text-alt text-white link link-hover">New to Auth Master? Please Register</Link>
                    </p>
                    {/* signing with google */}
                    <div className='text-center mb-4'>
                        <button onClick={handleGoogleSignIn} className='btn btn-accent'>Google Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;