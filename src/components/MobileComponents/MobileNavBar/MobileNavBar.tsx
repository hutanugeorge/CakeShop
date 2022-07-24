import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '../../../icons/MenuIcon'


export default () => {

   const [ open, setOpen ] = useState<boolean>(false)

   const navigate = useNavigate()

   return <>
      <div className={`nav-bar__mobile ${open ? 'nav-bar__mobile__blur' : ''}`}>
         <p className="nav-bar__mobile__shop-name">
            Cofetaria Acasa
         </p>
         <div className="nav-bar__mobile__dropdown" onClick={() => setOpen(prev => !prev)}>
            <div className="nav-bar__mobile__dropdown__menu">
               <MenuIcon/>
            </div>
            <div
               className={`nav-bar__mobile__dropdown__links ${open ? 'nav-bar__mobile__dropdown__links--visible' : ''}`}>
               <div className="nav-bar__mobile__dropdown__links__link">
                  <p>Acasa</p>
                  <hr/>
               </div>
               <div className="nav-bar__mobile__dropdown__links__link">
                  <p>Catalog</p>
                  <hr/>
               </div>
               <div className="nav-bar__mobile__dropdown__links__link">
                  <p>Despre noi</p>
                  <hr/>
               </div>
            </div>
         </div>
      </div>
   </>
}