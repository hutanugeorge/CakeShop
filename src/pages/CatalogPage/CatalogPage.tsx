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

   const [ showCakes, setShowCakes ] = useState(false)
   const [ showCookies, setShowCookies ] = useState(false)
   const [ showBakery, setShowBakery ] = useState(false)
   const [ showIceCream, setShowIceCream ] = useState(false)
   const [ showCandyBar, setShowCandyBar ] = useState(false)

   const productsSection = useRef(null)

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
                    onClick={() => {
                       setShowCakes(prev => !prev)
                       setShowIceCream(false)
                       setShowCandyBar(false)
                       setShowBakery(false)
                       setShowIceCream(false)
                       {
                          !showCakes ? gotoElement(productsSection) : null
                       }
                    }}>
                  <img src="./cake.avif" alt="cake image"/>
                  <div className="catalog-page__categories__element__category">
                     <p className="catalog-page__categories__element__category__name">Torturi</p>
                  </div>
               </div>
               <div className="catalog-page__categories__element"
                    onClick={() => {
                       setShowCookies(prev => !prev)
                       setShowIceCream(false)
                       setShowCakes(false)
                       setShowBakery(false)
                       setShowCandyBar(false)
                       {
                          !showCookies ? gotoElement(productsSection) : null
                       }
                    }}>
                  <img src="./macarons.avif" alt="cake"/>
                  <div className="catalog-page__categories__element__category">
                     <p className="catalog-page__categories__element__category__name">Prajituri</p>
                  </div>
               </div>
               <div className="catalog-page__categories__element"
                    onClick={() => {
                       setShowCandyBar(prev => !prev)
                       setShowCookies(false)
                       setShowCakes(false)
                       setShowBakery(false)
                       setShowIceCream(false)
                       !showCandyBar ? gotoElement(productsSection) : null
                    }}>
                  <img src="https://wp.wedme.ro/wp-content/uploads/2020/06/Flavius-Partan-056.jpg"
                       alt="cake"/>
                  <div className="catalog-page__categories__element__category">
                     <p className="catalog-page__categories__element__category__name">Candy
                        Bar</p>
                  </div>
               </div>
               <div className="catalog-page__categories__element"
                    onClick={() => {
                       setShowBakery(prev => !prev)
                       setShowCookies(false)
                       setShowIceCream(false)
                       setShowCandyBar(false)
                       setShowCakes(false)
                       !showBakery ? gotoElement(productsSection) : null
                    }}>
                  <img src="./bakery.avif" alt="cake"/>
                  <div className="catalog-page__categories__element__category">
                     <p className="catalog-page__categories__element__category__name">Brutărie </p>
                  </div>
               </div>
               <div className="catalog-page__categories__element"
                    onClick={() => {
                       setShowIceCream(true)
                       setShowCookies(false)
                       setShowCakes(false)
                       setShowBakery(false)
                       setShowCandyBar(false)
                       gotoElement(productsSection)
                    }}>
                  <img
                     src="https://www.foodiecrush.com/wp-content/uploads/2017/05/No-Churn-Ice-Cream-foodiecrush.com-31.jpg"
                     alt="cake"/>
                  <div className="catalog-page__categories__element__category">
                     <p className="catalog-page__categories__element__category__name">Inghetata </p>
                  </div>
               </div>
            </div>
            <div className="catalog-page__products-showcase" ref={productsSection}>
               <div
                  className={`catalog-page__products-showcase__cakes ${showCakes ? 'catalog-page__products-showcase__cakes__visible' : ''}`}>
                  <CakesList/>
               </div>
               <div
                  className={`catalog-page__products-showcase__cookies ${showCookies ? 'catalog-page__products-showcase__cookies__visible' : ''}`}>
                  <CookiesList/>
               </div>
               <div
                  className={`catalog-page__products-showcase__bakery ${showBakery ? 'catalog-page__products-showcase__bakery__visible' : ''}`}>
                  <BakeryList/>
               </div>
               <div
                  className={`catalog-page__products-showcase__ice-cream ${showIceCream ? 'catalog-page__products-showcase__ice-cream__visible' : ''}`}>
                  <img src="./iceCream.png" alt="ice cream"/>
                  <div className="catalog-page__products-showcase__ice-cream__info">
                     <p className="catalog-page__products-showcase__ice-cream__info__title">Inghetata</p>
                     <p className="catalog-page__products-showcase__ice-cream__info__message">Lorem
                        ipsum dolor
                        sit amet, consectetur adipisicing elit. Dolor, ea?</p>
                     <div className="catalog-page__products-showcase__ice-cream__info__flavours">

                     </div>
                  </div>
               </div>
               <div
                  className={`catalog-page__products-showcase__candy-bar ${showCandyBar ? 'catalog-page__products-showcase__candy-bar__visible' : ''}`}>
                  <CandyBar/>
               </div>
            </div>
         </div>
         <Footer/>
      </div>
   )
}