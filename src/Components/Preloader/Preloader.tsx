import React from "react";
import s from './preloader.module.scss'
import preloader from '../../Images/preloader.gif'

export const Preloader = () => {
    return (
        <div className={s.preloader}>
            <img src={preloader} alt="preloader"/>
        </div>
    )
}