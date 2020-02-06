import React from 'react'
import Social from "./Social/Social";
import WorkSchedule from "./WorkSchedule/WorkSchedule";
import css from './Footer.module.css'

const Footer = () => {
    return (
        <div>
            <WorkSchedule/>
            <div className={css.social}>
            <Social src='https://s3-cdn.mogul.gg/player/anh_lee.jpg?t=1550325834.39417' link='https://yandex.ru/'/>
            <Social src='https://s3-cdn.mogul.gg/player/anh_lee.jpg?t=1550325834.39417' link='https://yandex.ru/'/>
            <Social src='https://s3-cdn.mogul.gg/player/anh_lee.jpg?t=1550325834.39417' link='https://yandex.ru/'/>
        </div>
        </div>
    )
}

export default Footer