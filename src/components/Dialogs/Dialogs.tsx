import s from './Dialogs.module.css';
import React from 'react';

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <div className={`${s.dialog} ${s.active}`}>
                    Aleksandr
                </div>
                <div className={s.dialog}>
                    Boris
                </div>
                <div className={s.dialog}>
                    Iryna
                </div>
                <div className={s.dialog}>
                    Elena
                </div>
                <div className={s.dialog}>
                    Ivan
                </div>
                <div className={s.dialog}>
                    Alexey
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