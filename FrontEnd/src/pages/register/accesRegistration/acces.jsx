import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./acces.module.css"
const Acces = () => {
    return (
        <section className='text-center'>
            <img src="images/access.png" alt="" />
            <h3 className='m-3'>Спасибо! <br /> Вы успешно зарегистрировались!</h3>
            <NavLink to="/" className='btn btn-info'>На главную</NavLink>
        </section>
    );
};

export default Acces;