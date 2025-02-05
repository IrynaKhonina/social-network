import React from 'react';
import s from './Dialogs.module.css';
import { Message } from "./Message/Message";
import {DialogItem} from "./DualogItem/DialogItem";

type DialogType = {
    id: number;
    name: string;
};

type MessageType = {
    id: number;
    message: string;
};

type DialogsProps = {
    dialogsData: DialogType[];
    messageData: MessageType[];
};

export const Dialogs: React.FC<DialogsProps> = (props) => {
    let dialogsElements = props.dialogsData
        .map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />);

    let messagesElements = props.messageData
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