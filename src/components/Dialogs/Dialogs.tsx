import React from 'react';
import { Link } from 'react-router-dom';
import s from './Dialogs.module.css';

// Типизация для пропсов DialogItem
type DialogItemProps = {
    name: string; // Добавляем пропс name
};

// Компонент для отображения одного диалога
const DialogItem: React.FC<DialogItemProps> = ({ name }) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <Link to="/dialogs/1">{name}</Link>
        </div>
    );
};

// Компонент для отображения списка диалогов
export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {/* Передаем пропс name в DialogItem */}
                <DialogItem name={"Aleksandr"} />

                <div className={s.dialog}>
                    <Link to="/dialogs/2">Boris</Link>
                </div>
                <div className={s.dialog}>
                    <Link to="/dialogs/3">Iryna</Link>
                </div>
                <div className={s.dialog}>
                    <Link to="/dialogs/4">Elena</Link>
                </div>
                <div className={s.dialog}>
                    <Link to="/dialogs/5">Ivan</Link>
                </div>
                <div className={s.dialog}>
                    <Link to="/dialogs/6">Alexey</Link>
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