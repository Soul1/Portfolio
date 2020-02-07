import React from "react";
import css from './Works.module.css'
import Work from "./Work/Work";

const Works = () => {
    return (
        <div className={css.bg}>
            <div className={css.works}>
                <h3 className={css.title}>Мои работы</h3>
                <div className={css.items}>
                    <Work title='Проект' text='Описание'/>
                    <Work title='Проект' text='Описание'/>
                </div>
            </div>
        </div>
    )
}

export default Works