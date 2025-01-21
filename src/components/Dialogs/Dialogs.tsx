import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DualogItem/DialogItem";
import { Message } from "./Message/Message";

type DialogType = {
    id: number;
    name: string;
};

type MessageType = {
    id: number;
    message: string;
};

export const Dialogs = () => {
    let dialogsData: DialogType[] = [
        { id: 1, name: "Александр" },
        { id: 2, name: "Борис" },
        { id: 3, name: "Ирина" },
        { id: 4, name: "Елена" },
        { id: 5, name: "Иван" },
        { id: 6, name: "Алексей" },
    ];

    let messageData: MessageType[] = [
        { id: 1, message: "Привет" },
        { id: 2, message: "Как дела?" },
        { id: 3, message: "Йо" },
        { id: 4, message: "Йо" },
        { id: 5, message: "Йо" },
    ];

    let dialogsElements = dialogsData
        .map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />);

    let messagesElements = messageData
        .map(message => <Message key={message.id} message={message.message} />);

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