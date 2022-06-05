import NavBar from '../../components/NavBar/NavBar'


export default () => {
   return (
      <div className="landing-page__wrapper">
         <NavBar/>
         <div className="landing-page">
            <div className="landing-page__first-section">
               <img src='./Amandine.jpg' alt='cake' />
               <div className='landing-page__first-section__category'>
                  <p className='landing-page__first-section__category__name'>Brutărie </p>
               </div>
               <button className='landing-page__first-section__see-more-button' >
                  Vezi mai mult
               </button>
            </div>
            <div className="landing-page__second-section">
               <img src='https://chelsweets.com/wp-content/uploads/2021/11/blog-thumb-shot-of-white-drip-cake-2-819x1024.jpg.webp' alt='cake image' />
               <div className='landing-page__second-section__category'>
                  <p className='landing-page__second-section__category__name'>Torturi</p>
               </div>
               <button className='landing-page__second-section__see-more-button' >
                  Vezi mai mult
               </button>
            </div>
            <div className="landing-page__third-section">
               <img src='./Cake.png' alt='cake' />
               <div className='landing-page__third-section__category'>
                  <p className='landing-page__third-section__category__name'>Prajituri</p>
               </div>
               <button className='landing-page__third-section__see-more-button' >
                  Vezi mai mult
               </button>
            </div>
            <div className='landing-page__fourth-section'>
               <img src='https://wp.wedme.ro/wp-content/uploads/2020/06/Flavius-Partan-056.jpg' alt='cake' />
               <div className='landing-page__fourth-section__category'>
                  <p className='landing-page__fourth-section__category__name'>Candy Bar</p>
               </div>
               <button className='landing-page__fourth-section__see-more-button' >
                  Vezi mai mult
               </button>
            </div>
         </div>

      </div>
   )
}