import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

// Типизация для пропсов DialogItem
type DialogItemProps = {
    name: string;
    id: string;
};
// Типизация для пропсов Message
type MessageProps = {
    message: string;
};


// Компонент для отображения одного диалога
const DialogItem: React.FC<DialogItemProps> = ({ name, id }) => {
    let path=`/dialogs/${id}`
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{name}</NavLink> {/* Используем id */}
        </div>
    );
};


// Компонент для отображения одного сообщения
const Message: React.FC<MessageProps> = ({ message }) => {
    return (
        <div className={s.dialog}>{message}</div>
    );
};

// Компонент для отображения списка диалогов
export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Aleksandr" id="1" />
                <DialogItem name="Boris" id="2" />
                <DialogItem name="Iryna" id="3" />
                <DialogItem name="Elena" id="4" />
                <DialogItem name="Ivan" id="5" />
                <DialogItem name="Alexey" id="6" />
            </div>

            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="How are you?" />
                <Message message="Yo" />
            </div>
        </div>
    );
};