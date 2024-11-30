import React, { useState } from 'react';
import s from './header.module.css';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
    const [show, setShow] = useState(false);
    const location = useLocation();

    const headerClass =
        location.pathname === '/community' ||
        location.pathname === '/contact' ||
        location.pathname === '/news'
            ? s.relativeHeader
            : s.absoluteHeader;

    return (
        <header className={headerClass}>
            <div className={`container ${s.containers}`}>
                <NavLink to="/" className={s.logo}>
                    <img src="images/kglogo.png" alt="" />
                </NavLink>
                <nav className={`${s.nav} ${s.close_nav}`}>
                    <NavLink to="/" className={s.item}>
                        Главная
                    </NavLink>
                    <NavLink to="/news" className={s.item}>
                        Новости
                    </NavLink>
                    <NavLink to="/community" className={s.item}>
                        Мероприятие
                    </NavLink>
                    <NavLink to="/contact" className={s.item}>
                        Контакты
                    </NavLink>
                </nav>
                <div className="menu">
                <div onClick={() => setShow(!show)} id="burger-checkbox" className="burger-checkbox burger" />
                

                {/* <input onClick={() => setShow(!show)} type="checkbox" id="burger-checkbox" className="burger-checkbox" />
                <label className="burger" htmlFor="burger-checkbox"></label> */}
                    {show &&
                    
                    <ul className='menu-list'>
                        <NavLink onClick={() => setShow(!show)} to="/" className='menu-item'>
                            Главная
                        </NavLink>
                        <NavLink onClick={() => setShow(!show)} to="/news" className='menu-item'>
                            Новости
                        </NavLink>
                        <NavLink onClick={() => setShow(!show)} to="/community" className='menu-item'>
                            Мероприятие
                        </NavLink>
                        <NavLink onClick={() => setShow(!show)} to="/contact" className='menu-item'>
                            Контакты
                        </NavLink>
                    </ul>
                    } 
                </div>

            </div>
        </header>
    );
};

export default Header;
