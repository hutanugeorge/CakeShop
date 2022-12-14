import { NavLink, useNavigate } from 'react-router-dom'


export default () => {

   const navigate = useNavigate()

   return (
      <div className="nav-bar__desktop">
         <p className="nav-bar__desktop__shop-name" onClick={() =>
            navigate('/')
         }>
            Cofetaria Acasa
            <p>by Claudia Branzaru</p>
         </p>
         <ul className="nav-bar__desktop__menu">
            <li>
               <NavLink className={({ isActive }) => isActive ? 'nav-bar__desktop__menu__item' +
                  ' nav-bar__desktop__menu__item--active' : 'nav-bar__desktop__menu__item'
               } to={'/'}>
                  Acasă
               </NavLink>
            </li>
            <li>
               <NavLink className={({ isActive }) => isActive ? 'nav-bar__desktop__menu__item' +
                  ' nav-bar__desktop__menu__item--active' : 'nav-bar__desktop__menu__item'
               } to={'/catalog'}>
                  Catalog
               </NavLink>
            </li>
            <li>
               <NavLink className={({ isActive }) => isActive ? 'nav-bar__desktop__menu__item' +
                  ' nav-bar__desktop__menu__item--active' : 'nav-bar__desktop__menu__item'
               } to={'/about-us'}>
                  Despre noi
               </NavLink>
            </li>
         </ul>
      </div>
   )
}