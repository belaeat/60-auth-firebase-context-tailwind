import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import './light-theme.css';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;