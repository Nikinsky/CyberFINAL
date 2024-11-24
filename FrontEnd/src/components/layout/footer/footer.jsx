import React from 'react';
import s from "./footer.module.css"
const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className="container">
                <nav className={s.footer_nav}>
                    <div className={s.logo}><img src="images/logo.svg" alt="" /></div>
                    <div className={s.info_list}>
                        <div className={s.info_item}>
                            <h4 className={s.title}>
                                Пишите нам:
                            </h4>
                            <p className={s.descr}>info@cyberx-franchise.ru</p>
                        </div>
                        <div className={s.info_item}>
                            <h4 className={s.title}>
                                Адрес:
                            </h4>
                            <p className={s.descr}>bishkek</p>
                        </div>
                        <div className={s.info_item}>
                            <h4 className={s.title}>
                                Бесплатно по МСК
                            </h4>
                            <p className={s.descr}>2490241024891</p>
                        </div>

                    </div>
                </nav>
                
            </div>
        </footer>    
    )
};

export default Footer;