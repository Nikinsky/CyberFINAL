import React from 'react';
import s from './contact.module.css'
const Contact = () => {
    return (
        <section className={s.contact}>
            <div className="container">

                <h1 className={s.titlePage}>Контакты</h1>
                <p className={s.title}>Адрес:
                </p>
                <p className={s.text}>Москва, Профсоюзная, 56 (Башня Cherry Tower)
                </p>
                <p className={s.title}>Прямой телефон:
                </p>
                <p className={s.text}>8 800 444-13-02</p>
                <p className={s.title}>Пишите нам:
                </p>
                <p className={s.text}>info@cyberx-franchise.ru</p>
                <p className={s.title}>ИНН: 2368010296   ОГРН:</p>
                <p className={s.text}>1182375044697</p>
                <p className={s.text}>Почтовый адрес: 352630, Краснодарский кр, город Белореченск, район Белореченский, 
                    улица Интернациональная, дом 30</p>
            </div>
        </section>
    );
};

export default Contact;