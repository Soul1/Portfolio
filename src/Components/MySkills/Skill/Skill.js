import React from 'react'
import css from './Skill.module.css'

const Skill = (props) =>{
    return (
        <div className={css.skill}>
            <img className={css.img} src={props.src} alt=""/>
            <h3 className={css.title}>{props.title}</h3>
            <p className={css.info}>{props.info}</p>
        </div>
    )
}

export default Skill