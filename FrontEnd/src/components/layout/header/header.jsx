import React, { useState } from 'react';
import s from './header.module.css'
import { NavLink, useLocation } from 'react-router-dom';
const Header = () => {
    const [show,setShow] = useState(false)
    const location = useLocation()
    const headerClass = location.pathname === '/community' || location.pathname === '/contact' ||  location.pathname === '/news' ? s.relativeHeader : s.absoluteHeader;

    return (
        <header className={headerClass}>
            <div className={`container ${s.containers}`}>
                <NavLink to="/" className={s.logo}>
                    <img src="images/kglogo.png" alt="" />
                </NavLink>
                <nav className={`${s.nav} ${s.close_nav}`}>
                    <NavLink to='/news' className={s.item}>Новости</NavLink>
                    <NavLink to='/community' className={s.item}>Мероприятие</NavLink>
                    <NavLink to="/contact" className={s.item}>Контакты</NavLink>
                </nav>
                <img onClick={() => setShow(!show)} src="images/menu.png" className={!show ? s.menu  : s.n} alt="" />
                <img onClick={() => setShow(!show)} src="images/close.png" className={show ? s.close : s.n} alt="" />
                <div className={ show ? s.burger_block : s.n}>
                    <nav className={s.nav}>
                        <NavLink onClick={() => setShow(!show)} to="/news" className={s.item}>Новости</NavLink>
                        <NavLink onClick={() => setShow(!show)} to="/community" className={s.item}>Мероприятие</NavLink>
                        <NavLink onClick={() => setShow(!show)} to="/contact" className={s.item}>Контакты</NavLink>
                        {/* <btn className={`btn btn-info text-center text-white`}><img src='/images/call.png' /> Позвонить нам</btn> */}
                        <a href="tel:+996701893489" className={`btn btn-info text-center text-white ${s.call} `}><img src='/images/call.png' /> Позвонить нам</a>

                    </nav> 

                </div>
            </div>
        </header>
    );
};

export default Header;