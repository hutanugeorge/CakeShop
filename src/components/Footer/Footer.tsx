import FacebookIcon from '../../icons/FacebookIcon'
import InstagramIcon from '../../icons/InstagramIcon'
import MailIcon from '../../icons/MailIcon'
import PhoneIcon from '../../icons/PhoneIcon'
import PinIcon from '../../icons/PinIcon'


export default () => {

   return <div className="footer">
      <div className="footer__contact">
         <p className="footer__contact__title">Contacteaza-ne!</p>
         <div className="footer__contact__options">
            <div className="footer__contact__options__element">
               <PhoneIcon/>
               <div className="footer__contact__options__element__details">+40758481842</div>
            </div>
            <div className="footer__contact__options__element">
               <PinIcon/>
               <p className="footer__contact__options__element__details">str. Carol I</p>
            </div>
            <div className="footer__contact__options__element">
               <MailIcon/>
               <p className="footer__contact__options__element__details">cofetaria-acasa@gmail.com</p>
            </div>
         </div>
      </div>
      <div className="footer__schedule">
         <p className="footer__schedule__title">Orar</p>
         <div className="footer__schedule__intervals">
            <p className="footer__schedule__days">
               Luni - Duminica
            </p>
            <p className="footer__schedule__intervals__hours">
               8:00 - 20:00
            </p>
         </div>

      </div>
      <div className="footer__follow-us">
         <p className="footer__follow-us__title">Urmareste-ne!</p>
         <div className="footer__follow-us__platforms">
            <div className="link"
                 onClick={() => window.open('https://www.facebook.com/Cofetaria-Acasa-Targu-Ocna-101771164709091')}>
               <FacebookIcon/></div>
            <div className="link"
                 onClick={() => window.open('https://www.instagram.com/claudiabranzaru/')}>
               <InstagramIcon/></div>
         </div>
      </div>
   </div>
}