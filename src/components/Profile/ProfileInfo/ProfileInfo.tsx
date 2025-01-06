
import React from "react";
import s from "../Profile.module.css"; // Импорт CSS-модуля



export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovFzI1OM5Y_eqSiGhVsYwVMOaOr1UDQxBvg&s'
                    alt="Avatar"
                />
            </div>

            <div className={s.descriptionBlock}>
                ava+ description
            </div>
        </div>
    );
};