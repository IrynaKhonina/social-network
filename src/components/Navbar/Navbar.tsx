import s from './Navbar.module.css';



export const Navbar = () => {

    return (
        <>
            <nav className={s.nav}>

                <div className={s.item}>
                    <a>Profile</a>
                </div>

                <div className={s.item}>
                    <a> Massages </a>
                </div>


                <div className={s.item}>
                    <a> News</a>
                </div>

                <div className={s.item}>
                    <a> Music</a>
                </div>
                <div className={s.item}>
                    <a> Settings</a>
                </div>

            </nav>


        </>
    )
}

