import React, { useState } from 'react';
import { Post } from './Post/Post';
import s from './MyPost.module.css';

type PostType = {
    id: number;
    message: string;
    likesCount: string;
};

type MyPostsProps = {
    posts: PostType[];
};

export const MyPosts: React.FC<MyPostsProps> = (props) => {
    const [newPostText, setNewPostText] = useState("");

    // Исправляем использование props
    let postsElements = props.posts.map((p) => (
        <Post
            key={p.id}
            message={p.message}
            likesCount={p.likesCount}
        />
    ));

    const onAddPost = () => {
        alert(newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        value={newPostText}
                        onChange={(e) => setNewPostText(e.currentTarget.value)}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};