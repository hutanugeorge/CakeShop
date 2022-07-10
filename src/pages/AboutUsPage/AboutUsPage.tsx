import NavBar from '../../components/NavBar'
import FacebookIcon from '../../icons/FacebookIcon'
import InstagramIcon from '../../icons/InstagramIcon'
import MailIcon from '../../icons/MailIcon'
import PhoneIcon from '../../icons/PhoneIcon'
import PinIcon from '../../icons/PinIcon'


export default () => {
   return <div className="about-us__wrapper">
      <NavBar/>
      <div className="about-us">
         <div className="about-us__left-section">
            <p className="about-us__left-section__title">Serviciile noastre</p>
            <hr className="about-us__horizontal-line"/>
            <div className="about-us__left-section__content">
               <p className="about-us__left-section__content__element">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos,
                  praesentium.
               </p>
               <p className="about-us__left-section__content__element">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio
                  facilis tempora tenetur velit voluptatem.
               </p>
               <p className="about-us__left-section__content__element">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at earum enim
                  explicabo, fugiat fugit iusto sapiente voluptatum? Expedita facere itaque nemo
                  quas recusandae! Sequi.
               </p>
               <p className="about-us__left-section__content__element">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius repellendus
                  sapiente sit! Beatae consequuntur earum hic, ipsam ipsum suscipit vitae.
                  Aspernatur earum eos quas ullam!
               </p>
            </div>
         </div>
         <div className="about-us__middle-section">
            <div className="about-us__middle-section__group-photo">
               <img src="./groupPhoto.jpg" alt="photo"/>
            </div>
            <div className="about-us__middle-section__our-story">
               <p className="about-us__middle-section__our-story__title"> Povestea noastra</p>
               <hr className="about-us__horizontal-line"/>
               <p className="about-us__middle-section__our-story__story">Lorem ipsum dolor sit amet,
                  consectetur
                  adipisicing elit. Adipisci amet architecto commodi corporis culpa dolores esse
                  expedita officia, quaerat quo repellendus reprehenderit suscipit veniam? Aperiam
                  atque, autem delectus eveniet maxime natus possimus voluptas. Accusantium
                  architecto,
                  consectetur delectus dolorum et, explicabo laboriosam modi numquam provident quis
                  sapiente similique unde veritatis. Delectus.</p>
            </div>
         </div>
         <div className="about-us__right-section">
            <div className="about-us__right-section__contact">
               <div className="about-us__right-section__contact__list">
                  <p className="about-us__right-section__contact__list__element">
                     <PhoneIcon/> +40758481842</p>
                  <p className="about-us__right-section__contact__list__element">
                     <MailIcon/> cofetaria-acasa@gmail.com</p>
                  <p className="about-us__right-section__contact__list__element"><PinIcon/> Str.
                     Carol I, Bl.
                     F12, Târgu Ocna</p>
                  <div className="about-us__right-section__contact__list__social">
                     <p className="about-us__right-section__contact__list__social__element" onClick={() => window.open('https://www.facebook.com/Cofetaria-Acasa-Targu-Ocna-101771164709091')}>
                        <FacebookIcon fill={'black'}/>
                     </p>
                     <p className="about-us__right-section__contact__list__social__element" onClick={() => window.open('https://www.instagram.com/claudiabranzaru/')}>
                        <InstagramIcon fill={'black'}/>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
}