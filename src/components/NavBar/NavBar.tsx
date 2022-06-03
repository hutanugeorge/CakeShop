export default () => {
   return (
      <div className='nav-bar'>
         <p className='nav-bar__title'>
            Cofetăria Acasă
         </p>
         <div className='nav-bar__menu'>
            <p className='nav-bar__menu__home' onClick={() => console.log('hei')}>
               Acasă
            </p>
            <p className='nav-bar__menu__catalog'>
               Catalog
            </p>
            <p className='nav-bar__menu__about-us'>
               Despre noi
            </p>
         </div>
      </div>
   )
}