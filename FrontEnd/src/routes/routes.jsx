import React from 'react';
import Home from '../pages/home/home';
import Contact from '../pages/contacts/contact';
import News from '../pages/news/news';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from '../pages/register/registerPage';
import Community from '../pages/community/community';





const RoutesPage = () => {
    return (
        <main className='height-100'>
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/contact' Component={Contact} />
                <Route path='/news' Component={News} />
                <Route path='/register' Component={RegisterPage} />
                <Route path='/community' Component={Community} />
            </Routes>
        </main>
    );
};

export default RoutesPage;