import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.activeLink}>Профиль</NavLink>
            {/*данные пользователя*/}
        </div>
        <div className={`${s.item} ${s.activeLink}`}>
            <NavLink to="/dialogs" activeClassName={s.activeLink}>Сообщения</NavLink>
            {/*сообщения пользователя*/}
        </div>
        <div className={s.item}>
            <NavLink to="/news" activeClassName={s.activeLink}>Новости</NavLink>
            {/*отображаются новости (новые персоны которые заводит пользователь на которые он подписан, новые персоны с одинаковыми персональными данными)*/}
        </div>
        <div className={s.item}>
            <NavLink to="/users" activeClassName={s.activeLink}>Пользователи</NavLink>
            {/*все зарегистрированные пользователи*/}
        </div>
        <div className={s.item}>
            <a>Настройки</a>
        </div>
    </nav>
}

export default Navbar;