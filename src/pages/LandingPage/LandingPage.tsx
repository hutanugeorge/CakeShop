import NavBar from '../../components/NavBar/NavBar'


export default () => {
   return (
      <div className="landing-page__wrapper">
         <NavBar/>
         <div className="landing-page">
            <div className="landing-page__left-section">
               <img src='./Amandine.jpg' alt='cake' />
               <div className='landing-page__left-section__category'>
                  <p className='landing-page__left-section__category__name'>...</p>
               </div>
               <button className='landing-page__left-section__see-more-button' >
                  Vezi mai mult
               </button>
            </div>
            <div className="landing-page__main-section">
               <img src='https://chelsweets.com/wp-content/uploads/2021/11/blog-thumb-shot-of-white-drip-cake-2-819x1024.jpg.webp' alt='cake image' />
               <div className='landing-page__main-section__category'>
                  <p className='landing-page__main-section__category__name'>Torturi</p>
               </div>
               <button className='landing-page__main-section__see-more-button' >
                  Vezi mai mult
               </button>
            </div>
            <div className="landing-page__right-section">
               <img src='./Cake.png' alt='cake' />
               <div className='landing-page__right-section__category'>
                  <p className='landing-page__right-section__category__name'>Prajituri</p>
               </div>
               <button className='landing-page__right-section__see-more-button' >
                  Vezi mai mult
               </button>
            </div>
         </div>

      </div>
   )
}