import { useNavigate } from 'react-router-dom'
import CakesBG from '../../icons/CakesBG'
import CheckIcon from '../../icons/CheckIcon'


export default () => {

   const navigate = useNavigate()

   return <div className="landing-page">
      <div className="landing-page__left-section">
         <div className="landing-page__left-section__description">
            <p>Toate te duc cu gândul Acasă!</p>
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
            <div className="landing-page__right-section__features__feature">
               <CheckIcon/>
               Torturi personalizate
            </div>
            <p className="landing-page__right-section__features__feature">
               <CheckIcon/>
               Preparate fara premixuri
            </p>
            <p className="landing-page__right-section__features__feature">
               <CheckIcon/>
               Ingrediente naturale
            </p>
         </div>
         <div className="landing-page__right-section__explore">
            <button className="landing-page__right-section__explore__explore-button"
                    onClick={() => navigate('/catalog')}>Explorează
            </button>
         </div>
      </div>
   </div>
}