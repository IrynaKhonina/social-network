import s from './Post.module.css';

type PostPropsType = {
    message:string
    likesCount: string
}

export const Post = ({ message, likesCount }:PostPropsType)  => {

   return (

    <div className={s.item}>
      <img src="https://lumiere-a.akamaihd.net/v1/images/a_avatarpandorapedia_neytiri_16x9_1098_01_0e7d844a.jpeg?region=420%2C0%2C1080%2C1080"
           alt="Avatar"
      >
      </img>
        {message}
      <div>
          <span>Like</span>{likesCount}
      </div>
    </div>

  )
}


