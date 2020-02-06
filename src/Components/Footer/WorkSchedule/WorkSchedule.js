import React from 'react'
import {NavLink} from "react-router-dom";
import css from './WorkSchedule.module.css'

const WorkSchedule = () => {
    return (
        <div className={css.workS}>
            <p className={css.info}>Рассматриваю вариант работы в офисе</p>
            <NavLink to='/contact'>
                <div className={css.btn}>
                    Нанять меня
                </div>
            </NavLink>
        </div>
    )
}
export default WorkSchedule