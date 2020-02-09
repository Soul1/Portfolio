import React from "react";
import css from './Work.module.css'

const Work = (props) => {
    return (
        <div className={css.item}>
        <div className={css.work}>
            <div className={css.img}>
                <a>
                    <img src={props.src} alt=""/>
                    <div className={css.btn}>
                        Смотреть
                    </div>
                </a>
            </div>
            <div className={css.info}>
                <h3 className={css.title}>{props.title}</h3>
                <p className={css.text}>{props.text}</p>
            </div>
        </div>
        </div>
    )
}

export default Work