import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    // sign out
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error.message))
    }

    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                {user && <Link className="btn btn-ghost normal-case text-xl" to='/profile'>Profile</Link>}
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>


                {/* showing user information */}
                {
                    user ? <>
                        <span>{user.email}</span>
                        <button onClick={handleLogOut} className='btn btn-xs'>Sign Out</button>
                    </> : <Link to='/login'>Login</Link>
                }

            </div>
        </div>
    );
};

export default Header;