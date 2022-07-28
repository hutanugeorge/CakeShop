import NavBar from '../../components/NavBar'
import FacebookIcon from '../../icons/FacebookIcon'
import InstagramIcon from '../../icons/InstagramIcon'
import MailIcon from '../../icons/MailIcon'
import PhoneIcon from '../../icons/PhoneIcon'
import PinIcon from '../../icons/PinIcon'
import RightArrowIcon from '../../icons/RightArrowIcon'


export default () => {
   return <div className="about-us__wrapper">
      <NavBar/>
      <div className="about-us">
         <div className="about-us__information">
            <div className="about-us__information__sections">
               <div className="about-us__information__sections__section">
                  <div className="about-us__information__sections__section__arrow">
                     <RightArrowIcon/>
                  </div>
                  <p className="about-us__information__sections__section__title">
                     Informatii despre comenzi
                  </p>
               </div>
               <div className="about-us__information__sections__section">
                  <div className="about-us__information__sections__section__arrow">
                     <RightArrowIcon/>
                  </div>
                  <p className="about-us__information__sections__section__title">
                     Povestea Noastra
                  </p>
               </div>
               <div className="about-us__information__sections__section">
                  <div className="about-us__information__sections__section__arrow">
                     <RightArrowIcon/>
                  </div>
                  <p className="about-us__information__sections__section__title">
                     Contact
                  </p>
               </div>
            </div>
         </div>
         <div className="about-us__group-photo">
            <img
               src="https://media.istockphoto.com/photos/group-multiracial-people-having-fun-outdoor-happy-mixed-race-friends-picture-id1211345565?k=20&m=1211345565&s=612x612&w=0&h=Gg65DvzedP7YDo6XFbB-8-f7U7m5zHm1OPO3uIiVFgo="
               alt="group photo"/>
         </div>
      </div>
   </div>
}