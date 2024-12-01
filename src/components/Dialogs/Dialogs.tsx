import s from './Dialogs.module.css';
import React from 'react';
import {Link} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <div className={`${s.dialog} ${s.active}`}>
                    <Link to ="/dialogs/1">Aleksandr</Link>
                </div>
                <div className={s.dialog}>
                    <Link to ="/dialogs/2">Boris</Link>
                </div>
                <div className={s.dialog}>
                    <Link to ="/dialogs/3">Iryna</Link>
                </div>
                <div className={s.dialog}>
                    <Link to ="/dialogs/4">Elena</Link>
                </div>
                <div className={s.dialog}>
                    <Link to ="/dialogs/5">Ivan</Link>
                </div>
                <div className={s.dialog}>
                    <Link to ="/dialogs/6">Alexey</Link>
                </div>

            </div>


            <div className={s.messages}>
            <div className={s.dialog}>Hi</div>
            <div className={s.dialog}>How are you?</div>
            <div className={s.dialog}>Yo</div>
        </div>

        </div>
    );
};