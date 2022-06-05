export default () => {
   return (
      <div className="nav-bar">
         <p className="nav-bar__logo" onClick={() => {
            {
               window.location.href = '/'
            }
         }}>
            <img src='./Logo.png' alt='logo' />
         </p>
         <div className="nav-bar__menu">
            <p className="nav-bar__menu__home" onClick={() => {
               window.location.href = '/'
            }}>
               Acasă
            </p>
            <p className="nav-bar__menu__catalog" onClick={() => {
               window.location.href = '/catalog'
            }}>
               Catalog
            </p>
            <p className="nav-bar__menu__about-us">
               Despre noi
            </p>
         </div>
      </div>
   )
}