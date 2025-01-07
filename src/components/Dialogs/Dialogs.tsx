import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

// Типизация для пропсов DialogItem
type DialogItemProps = {
    name: string;
    id: number;
};

// Типизация для пропсов Message
type MessageProps = {
    message: string;
    id: number;
};

// Типизация для данных диалогов и сообщений
type DialogType = {
    id: number;
    name: string;
};

type MessageType = {
    id: number;
    message: string;
};

// Компонент для отображения одного диалога
const DialogItem: React.FC<DialogItemProps> = ({ name, id }) => {

    let path = `/dialogs/${id}`;

    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink
                to={path}
                className={({ isActive }) => (isActive ? s.active : "")}
            >
                {name}
            </NavLink>
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
    let dialogsData: DialogType[] = [
        { id: 1, name: "Aleksandr" },
        { id: 2, name: "Boris" },
        { id: 3, name: "Iryna" },
        { id: 4, name: "Elena" },
        { id: 5, name: "Ivan" },
        { id: 6, name: "Alexey" },
    ];

    let messageData: MessageType[] = [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
    ];

    let dialogsElements = dialogsData
        .map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />);

    let messagesElements = messageData
        .map(message => <Message key={message.id} message={message.message} id={message.id} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};