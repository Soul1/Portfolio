import React from 'react'
import Nav from "./Nav/Nav";
import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.logo}><img src="https://sun9-46.userapi.com/c857136/v857136231/75285/avtWABqtBT0.jpg?ava=1" alt=""/></div>
            <Nav className={css.nav}/>
        </div>
    )
}
export default Header