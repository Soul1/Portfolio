import React from 'react'
import {NavLink} from "react-router-dom";
import css from './Social.module.css'

const Social = (props) => {
    return (
        <div className={css.social}>
            <NavLink to={props.link}>
                <img className={css.socialImg} src={props.src} alt=""/>
            </NavLink>
        </div>
    )
}

export default Social