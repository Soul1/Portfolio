import React from 'react'
import css from './Contact.module.css'

const Contact = () => {
    return(
        <div className={css.contact}>
            <h3 className={css.info}>Контакты</h3>
            <form>
                <input className={css.input} type="text" placeholder='Ваше ФИО'required/>
                <input className={css.input} type="email" placeholder='Email' required/>
                <textarea className={css.textarea} placeholder='Текст' required></textarea>
            </form>
            <button className={css.btn} type="submit">Отправить</button>
        </div>
    )
}

export default Contact