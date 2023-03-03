import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        localStorage.removeItem('isAuth');
        navigate('/auth/login');
    };

    return (
        <div>
            <p>Home page</p>
            <button onClick={handleSubmit}>Sign out</button>
        </div>
    );
}

export default Home;
