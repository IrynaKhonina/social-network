import s from './MyPost.module.css';
import { Post } from './Post/Post';



export const MyPosts = () => {

    return (
       

      <div>
        My posts

        <div>
          <textarea></textarea>
          <button>Add post</button>

        </div>

        <div className={s.posts}>

          <Post
              message ="Hi, how are you?"
              likesCount = "0"
          />

          <Post
              message ="It's my first post"
              likesCount = "23"
          />

        </div>
      </div>
      
       
    )
}


