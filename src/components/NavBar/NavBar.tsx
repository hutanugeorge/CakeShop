import {NavLink, useNavigate} from "react-router-dom";


export default () => {

    const navigate = useNavigate();

    return (
        <div className="nav-bar">
            <p className="nav-bar__logo" onClick={() => {
                navigate('/')
            }}>
                <img src='./Logo.png' alt='logo'/>
            </p>
            <ul className="nav-bar__menu">
                <li>
                    <NavLink className={({isActive}) => isActive ? 'nav-bar__menu__item nav-bar__menu__item--active' : 'nav-bar__menu__item'
                    } to={'/'}>
                        Acasă
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'nav-bar__menu__item nav-bar__menu__item--active' : 'nav-bar__menu__item'
                    } to={'/catalog'}>
                        Catalog
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'nav-bar__menu__item nav-bar__menu__item--active' : 'nav-bar__menu__item'
                    } to={'/about-us'}>
                        Despre noi
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}