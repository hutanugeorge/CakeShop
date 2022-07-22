import { useEffect, useRef, useState } from 'react'

import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar/NavBar'
import Product from '../../components/Product'
import ProductsShowcase from '../../components/ProductsShowcase'


export default () => {

   const [ showCakes, setShowCakes ] = useState<boolean>(false)
   const [ showCookies, setShowCookies ] = useState<boolean>(false)
   const [ showBakery, setShowBakery ] = useState<boolean>(false)
   const [ showIceCream, setShowIceCream ] = useState<boolean>(false)
   const [ showCandyBar, setShowCandyBar ] = useState<boolean>(false)

   const productsSection = useRef(null)

   const displayProducts = () => showCakes || showCookies || showIceCream || showBakery || showCandyBar

   const visibleCakes = () => {
      setShowCakes(prev => !prev)
      setShowCookies(false)
      setShowCandyBar(false)
      setShowBakery(false)
      setShowIceCream(false)
      !showCakes ? gotoElement(productsSection) : null
   }

   const visibleCookies = () => {
      setShowCookies(prev => !prev)
      setShowIceCream(false)
      setShowCakes(false)
      setShowBakery(false)
      setShowCandyBar(false)
      !showCookies ? gotoElement(productsSection) : null
   }

   const visibleCandyBar = () => {
      setShowCandyBar(prev => !prev)
      setShowCookies(false)
      setShowCakes(false)
      setShowBakery(false)
      setShowIceCream(false)
      !showCandyBar ? gotoElement(productsSection) : null
   }

   const visibleBakery = () => {
      setShowBakery(prev => !prev)
      setShowCookies(false)
      setShowIceCream(false)
      setShowCandyBar(false)
      setShowCakes(false)
      !showBakery ? gotoElement(productsSection) : null
   }

   const visibleIceCream = () => {
      setShowIceCream(prev => !prev)
      setShowCookies(false)
      setShowCakes(false)
      setShowBakery(false)
      setShowCandyBar(false)
      !showIceCream ? gotoElement(productsSection) : null
   }

   const categoryName = {
      cakes: 'Torturi',
      cookies: 'Prajituri',
      bakery: 'Brutarie',
      candyBar: 'Candy Bar',
      iceCream: 'Inghetata'
   }

   const gotoElement = (section: any) => window.scrollTo({
      top: section.current && section.current.offsetTop,
      behavior: 'smooth'
   })

   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   console.log(showCakes)


   return (
      <div className="catalog-page__wrapper">
         <NavBar/>
         <div className="catalog-page">
            <div className="catalog-page__categories">
               <Product showProduct={visibleCakes} image={'./cake.avif'}
                        name={categoryName.cakes}/>
               <Product showProduct={visibleCookies} image={'./macarons.avif'}
                        name={categoryName.cookies}/>
               <Product showProduct={visibleCandyBar}
                        image={'https://wp.wedme.ro/wp-content/uploads/2020/06/Flavius-Partan-056.jpg'}
                        name={categoryName.candyBar}/>
               <Product showProduct={visibleBakery} image={'./bakery.avif'}
                        name={categoryName.bakery}/>
               <Product showProduct={visibleIceCream}
                        image={'https://www.foodiecrush.com/wp-content/uploads/2017/05/No-Churn-Ice-Cream-foodiecrush.com-31.jpg'}
                        name={categoryName.iceCream}/>
            </div>
            {displayProducts() &&
            <div ref={productsSection}><ProductsShowcase showCakes={showCakes}
                                                         showCookies={showCookies}
                                                         showBakery={showBakery}
                                                         showIceCream={showIceCream}
                                                         showCandyBar={showCandyBar}/></div>}
         </div>
         <Footer/>
      </div>
   )
}