import React from 'react';
import s from './Profile.module.css';
import { MyPosts } from './MyPosts/MyPosts';

export const Profile = () => {
    return (
        <>
            <div>
                <div>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovFzI1OM5Y_eqSiGhVsYwVMOaOr1UDQxBvg&s' alt="Avatar" />
                </div>
                <div>
                    ava+ description
                </div>
                <MyPosts />
            </div>
        </>
    );
};