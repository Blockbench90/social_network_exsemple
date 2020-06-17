import React from "react";
import preloader from "../../assets/images/preloader.gif"
import style from './Preloader.module.css'

const Preloader = (props) => {
    return <div className={style.Wrapper}>
        <img src={preloader} />
    </div>
}
export default Preloader;