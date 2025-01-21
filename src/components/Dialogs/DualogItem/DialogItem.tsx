import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Dialogs.module.css';

type DialogItemProps = {
    id: number;
    name: string;
};

export const DialogItem: React.FC<DialogItemProps> = ({ id, name }) => {
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