import NavBar from '../../components/NavBar/NavBar'
import CheckIcon from '../../icons/CheckIcon'


export default () => {
   return (
      <div className="landing-page__wrapper">
         <NavBar/>
         <div className="landing-page">
            <div className="landing-page__left-section">
               <div className="landing-page__left-section__description">
                  <p className="landing-page__left-section__description__quote">
                     Toate te duc cu gândul <mark className="orange">acasă</mark>!
                  </p>
                  <p className="landing-page__left-section__description__content">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eaque id
                     molestiae quaerat quos reprehenderit veniam. Asperiores officiis quas ratione?
                  </p>
               </div>
               <div className="landing-page__left-section__cake-images">
                  <img src="./cake1.webp" alt="Cake"/>
                  <img src="./cake2.jpg" alt="Cake"/>
                  <img src="./cake3.jpg" alt="Cake"/>
               </div>

            </div>
            <div className="landing-page__middle-section">
               <img src="Cheesecake.jpg" alt="cheesecake"/>
            </div>
            <div className="landing-page__right-section">
               <div className="landing-page__right-section__features">
                  <div className="landing-page__right-section__features__feature-1">
                     <CheckIcon/>
                     Torturi personalizate
                  </div>
                  <p className="landing-page__right-section__features__feature-2">
                     <CheckIcon/>
                     Livrare la domiciliu
                  </p>
                  <p className="landing-page__right-section__features__feature-3">
                     <CheckIcon/>
                     Ingrediente naturale
                  </p>
               </div>
               <div className="landing-page__right-section__explore">
                  <button className="landing-page__right-section__explore__explore-button" onClick={ () => {window.location.href='/catalog'}}>Explorează
                  </button>
               </div>
            </div>

         </div>
      </div>

   )
}