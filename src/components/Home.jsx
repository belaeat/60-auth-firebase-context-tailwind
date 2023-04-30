import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {

    // using context API
    const { user } = useContext(AuthContext)

    return (
        <div>
            <h2>This is Home {user && <span>{user.displayName}</span>}</h2>
        </div>
    );
};

export default Home;