import React from 'react'
import css from './About.module.css'

const About = () =>{
    return (
        <div className={css.about}>
            <div className={css.info}>
                <div className={css.me}>
                    Привет!<br/>
                    Меня зовут Мидаев Ахмад.<br/>
                    Я junior Frontend React developer :)
                </div>
            </div>
            <div className={css.img}>
                <img src="https://fanfics.me/images/member_foto/full/510372-1556478502.jpg" alt="Люблю кошек"/>
            </div>
        </div>
    )

}
export default About