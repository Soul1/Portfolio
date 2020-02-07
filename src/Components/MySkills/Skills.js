import React from 'react'
import css from './Skills.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={css.skills}>
            <h3 className={css.title}>Мои скиллы</h3>
            <div className={css.items}>
                <Skill title='React' info='Описание'/>
                <Skill title='React' info='Описание'/>
                <Skill title='React' info='Описание'/>
            </div>
        </div>
    )
}

export default Skills