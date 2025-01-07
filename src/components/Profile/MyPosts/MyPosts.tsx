import React from 'react';
import { Post } from './Post/Post';
import s from './MyPost.module.css';

type PostType = {
    id: number;
    message: string;
    likesCount: string; // Убедитесь, что это число
};

export const MyPosts = () => {
    const [newPostText, setNewPostText] = React.useState("");

    let post: PostType[] = [
        { id: 1, message: "Hi, how are you?", likesCount: "12" },
        { id: 2, message: "It's my first post", likesCount: "23" },
    ];

    let postsElements = post.map(p => (
        <Post
            key={p.id}
            message={p.message}
            likesCount={p.likesCount} // Передается как число
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