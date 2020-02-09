import React from 'react'
import {NavLink} from "react-router-dom";
import css from './Nav.module.css'

const Nav = () => {
    return (
        <div className={css.navbar}>
            <NavLink className={css.nav} to='/'>Главная</NavLink>
            <NavLink className={css.nav} to='/skill'>Скиллы</NavLink>
            <NavLink className={css.nav} to='/works'>Работы</NavLink>
            <NavLink className={css.nav} to='/contact'>Контакты</NavLink>
        </div>
    )
}

export default Nav