import { useEffect, useRef, useState } from 'react'
import { useWindowScroll } from 'react-use'

import BakeryList from '../../components/Categories/Bakery/BakeryList'
import CakesList from '../../components/Categories/Cakes/CakesList'
import CandyBar from '../../components/Categories/CandyBar'
import CookiesList from '../../components/Categories/Cookies/CookiesList'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar/NavBar'
import TopArrowIcon from '../../icons/TopArrowIcon'


export default () => {

   const cakesSection = useRef(null)
   const cookiesSection = useRef(null)
   const bakerySection = useRef(null)
   const iceCreamSection = useRef(null)
   const candyBarSection = useRef(null)

   const gotoElement = (section: any) => window.scrollTo({
      top: section.current && section.current.offsetTop,
      behavior: 'smooth'
   })

   const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })

   const { y: pageYOffset } = useWindowScroll()
   const [ visible, setVisible ] = useState<boolean>(false)

   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   useEffect(() => {
      pageYOffset > 800 ? setVisible(true) : setVisible(false)
   }, [ pageYOffset ])


   return (
      <div className="catalog-page__wrapper">
         <div className={`scroll-up-button ${visible ? 'scroll-up-button__visible' : ''}`}
              onClick={() => scrollToTop()}>
            <TopArrowIcon/>
         </div>
         <NavBar/>
         <div className="catalog-page">
            <div className="catalog-page__categories">
               <div className="catalog-page__categories__element"
                    onClick={() => gotoElement(cakesSection)}>
                  <img src="./cake.avif" alt="cake image"/>
                  <div className="catalog-page__categories__element__category">
                     <p className="catalog-page__categories__element__category__name">Torturi</p>
                  </div>
               </div>
               <div className="catalog-page__categories__element"
                    onClick={() => gotoElement(cookiesSection)}>
                  <img src="./macarons.avif" alt="cake"/>
                  <div className="catalog-page__categories__element__category">
                     <p className="catalog-page__categories__element__category__name">Prajituri</p>
                  </div>
               </div>
               <div className="catalog-page__categories__element" onClick={() => gotoElement(candyBarSection)}>
                  <img src="https://wp.wedme.ro/wp-content/uploads/2020/06/Flavius-Partan-056.jpg"
                       alt="cake"/>
                  <div className="catalog-page__categories__element__category">
                     <p className="catalog-page__categories__element__category__name">Candy
                        Bar</p>
                  </div>
               </div>
               <div className="catalog-page__categories__element"
                    onClick={() => gotoElement(bakerySection)}>
                  <img src="./bakery.avif" alt="cake"/>
                  <div className="catalog-page__categories__element__category">
                     <p className="catalog-page__categories__element__category__name">Brutărie </p>
                  </div>
               </div>
               <div className="catalog-page__categories__element"
                    onClick={() => gotoElement(iceCreamSection)}>
                  <img
                     src="https://www.foodiecrush.com/wp-content/uploads/2017/05/No-Churn-Ice-Cream-foodiecrush.com-31.jpg"
                     alt="cake"/>
                  <div className="catalog-page__categories__element__category">
                     <p className="catalog-page__categories__element__category__name">Inghetata </p>
                  </div>
               </div>
            </div>
            <div className="catalog-page__products-showcase">
               <p className="catalog-page__products-showcase__title" ref={cakesSection}>Torturi</p>
               <hr className="horizontal-line"/>
               <p className="catalog-page__products-showcase__quote">O petrecere fara un tort este
                  doar o
                  intalnire!</p>
               <div className="catalog-page__products-showcase__cakes">
                  <CakesList/>
               </div>
               <p className="catalog-page__products-showcase__title "
                  ref={cookiesSection}>Prajituri</p>
               <hr className="horizontal-line"/>
               <p className="catalog-page__products-showcase__quote">Viata e scurta, asa ca
                  indulceste-o!</p>
               <div className="catalog-page__products-showcase__cookies">
                  <CookiesList/>
               </div>
               <p className="catalog-page__products-showcase__title"
                  ref={bakerySection}>Brutarie</p>
               <hr className="horizontal-line"/>
               <p className="catalog-page__products-showcase__quote">Dragoste la prima
                  muscatura!</p>
               <div className="catalog-page__products-showcase__bakery">
                  <BakeryList/>
               </div>
               <div className="catalog-page__products-showcase__ice-cream">
                  <img src="./iceCream.png" alt="ice cream"/>
                  <div className="catalog-page__products-showcase__ice-cream__info"
                       ref={iceCreamSection}>
                     <p className="catalog-page__products-showcase__ice-cream__info__title">Inghetata</p>
                     <p className="catalog-page__products-showcase__ice-cream__info__message">Lorem
                        ipsum dolor
                        sit amet, consectetur adipisicing elit. Dolor, ea?</p>
                     <div className="catalog-page__products-showcase__ice-cream__info__flavours">

                     </div>
                  </div>
               </div>
               <div className="catalog-page__products-showcase__candy-bar" ref={candyBarSection}>
                  <CandyBar />
               </div>
            </div>
         </div>
         <Footer />
      </div>
   )
}