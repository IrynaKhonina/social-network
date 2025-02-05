import React from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

type PostType = {
    id: number;
    message: string;
    likesCount: string;
};

type ProfileProps = {
    posts: PostType[];
};

export const Profile: React.FC<ProfileProps> = ({ posts }) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts} />
        </div>
    );
};