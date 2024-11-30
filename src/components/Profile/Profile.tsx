import s from './Profile.module.css';
import { MyPosts } from './MyPosts/MyPosts';


export const Profile = () => {

    return (
        <>
           <div className={s.content}>
        <div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovFzI1OM5Y_eqSiGhVsYwVMOaOr1UDQxBvg&s' />
        </div>
      <div>
        ava+ description
      </div>
      <MyPosts/>
      
      </div>
        </>
    )
}


