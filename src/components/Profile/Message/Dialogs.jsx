import React from "react";
import style from "./Dialogs.module.css"


const Dialogs = (props) => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <div className={style.dialog}>
                    <div className={style.DialogUser}>
                        Alex
                    </div>
                    <div className={style.DialogUser}>
                        Alex
                    </div>
                    <div className={style.DialogUser}>
                        Alex
                    </div>
                    <div className={style.DialogUser}>
                        Alex
                    </div>
                </div>
                <div className={style.messages}>
                    <div className={style.DialogUser}>
                        <b>Hallo, am glad to see yuo</b>
                    </div>
                    <div className={style.DialogUser}>
                        <b>Hallo, am glad to see yuo</b>
                    </div>
                    <div className={style.DialogUser}>
                        <b>Hallo, am glad to see yuo</b>
                    </div>
                    <div className={style.DialogUser}>
                        <b>Hallo, am glad to see yuo</b>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Dialogs;