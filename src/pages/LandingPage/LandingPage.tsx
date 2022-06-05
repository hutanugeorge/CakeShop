import NavBar from '../../components/NavBar/NavBar'


export default () => {
   return (
      <div className='landing-page__wrapper'>
         <NavBar />
         <div className='landing-page'>
            <div className="landing-page__left-section"></div>
            <div className="landing-page__middle-section"></div>
            <div className="landing-page__right-section"></div>

         </div>
      </div>

   )
}