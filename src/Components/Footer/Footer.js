import React from 'react'
import Social from "./Social/Social";
import WorkSchedule from "./WorkSchedule/WorkSchedule";
import css from './Footer.module.css'

const Footer = () => {
    return (
        <div className={css.footer}>
            <WorkSchedule/>
            <h3 className={css.name}>
                Мидаев Ахмад
            </h3>
            <div className={css.social}>
                <Social src='https://s3-cdn.mogul.gg/player/anh_lee.jpg?t=1550325834.39417' link='/contact'/>
                <Social src='https://s3-cdn.mogul.gg/player/anh_lee.jpg?t=1550325834.39417' link='/contact'/>
                <Social src='https://s3-cdn.mogul.gg/player/anh_lee.jpg?t=1550325834.39417' link='/contact'/>
            </div>
            <div className={css.copy}>
                2020
            </div>
        </div>
    )
}

export default Footer