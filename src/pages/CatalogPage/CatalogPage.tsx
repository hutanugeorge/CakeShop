import { useRef } from 'react'


import Bakery from '../../components/Categories/Bakery'
import Cakes from '../../components/Categories/Cakes'
import Cookies from '../../components/Categories/Cookies'
import NavBar from '../../components/NavBar/NavBar'


export default () => {

   const cakesSection = useRef(null)

   const gotoCakes = () => window.scrollTo({
      top: cakesSection.current && cakesSection.current.offsetTop,
      behavior: 'smooth'
   })

   return (
      <div className="catalog-page__wrapper">
         <NavBar/>
         <div className="catalog-page">
            <div className="catalog-page__categories">
               <div className="catalog-page__categories__cakes" onClick={() => gotoCakes()}>
                  <img src="./cake.avif" alt="cake image"/>
                  <div className="catalog-page__categories__cakes__category">
                     <p className="catalog-page__categories__cakes__category__name">Torturi</p>
                  </div>
               </div>
               <div className="catalog-page__categories__cookies">
                  <img src="./macarons.avif" alt="cake"/>
                  <div className="catalog-page__categories__cookies__category">
                     <p className="catalog-page__categories__cookies__category__name">Prajituri</p>
                  </div>
               </div>
               <div className="catalog-page__categories__candy-bar">
                  <img src="https://wp.wedme.ro/wp-content/uploads/2020/06/Flavius-Partan-056.jpg"
                       alt="cake"/>
                  <div className="catalog-page__categories__candy-bar__category">
                     <p className="catalog-page__categories__candy-bar__category__name">Candy
                        Bar</p>
                  </div>
               </div>
               <div className="catalog-page__categories__bakery">
                  <img src="./bakery.avif" alt="cake"/>
                  <div className="catalog-page__categories__bakery__category">
                     <p className="catalog-page__categories__bakery__category__name">Brutărie </p>
                  </div>
               </div>
               <div className="catalog-page__categories__ice-cream">
                  <img
                     src="https://www.foodiecrush.com/wp-content/uploads/2017/05/No-Churn-Ice-Cream-foodiecrush.com-31.jpg"
                     alt="cake"/>
                  <div className="catalog-page__categories__ice-cream__category">
                     <p className="catalog-page__categories__ice-cream__category__name">Inghetata </p>
                  </div>
               </div>
            </div>
            <div className="catalog-page__products-showcase" ref={cakesSection}>
               <p className="catalog-page__products-showcase__title">Torturi</p>
               <hr className="horizontal-line"/>
               <p className="catalog-page__products-showcase__quote">O petrecere fara un tort este doar o
                  intalnire!</p>
               <div className="catalog-page__products-showcase__cakes">
                  <Cakes type={'Tort insiropat'} price={'60 ron/kg'} image={'./cake.avif'}/>
                  <Cakes type={'Tort insiropat'} price={'60 ron/kg'} image={'./cake.avif'}/>
                  <Cakes type={'Tort insiropat'} price={'60 ron/kg'} image={'./cake.avif'}/>
                  <Cakes type={'Tort insiropat'} price={'60 ron/kg'} image={'./cake.avif'}/>
                  <Cakes type={'Tort insiropat'} price={'60 ron/kg'} image={'./cake.avif'}/>
                  <Cakes type={'Tort insiropat'} price={'60 ron/kg'} image={'./cake.avif'}/>
                  <Cakes type={'Tort insiropat'} price={'60 ron/kg'} image={'./cake.avif'}/>
                  <Cakes type={'Tort insiropat'} price={'60 ron/kg'} image={'./cake.avif'}/>
                  <Cakes type={'Tort insiropat'} price={'60 ron/kg'} image={'./cake.avif'}/>
               </div>
               <p className="catalog-page__products-showcase__title ">Prajituri</p>
               <hr className="horizontal-line"/>
               <p className="catalog-page__products-showcase__quote">Viata e scurta, asa ca indulceste-o!</p>
               <div className="catalog-page__products-showcase__cookies">
                  <Cookies type={'Prajitura'} price={'61 ron/kg'} image={'./macarons.avif'}/>
                  <Cookies type={'Prajitura'} price={'61 ron/kg'} image={'./macarons.avif'}/>
                  <Cookies type={'Prajitura'} price={'61 ron/kg'} image={'./macarons.avif'}/>
                  <Cookies type={'Prajitura'} price={'61 ron/kg'} image={'./macarons.avif'}/>
                  <Cookies type={'Prajitura'} price={'61 ron/kg'} image={'./macarons.avif'}/>
                  <Cookies type={'Prajitura'} price={'61 ron/kg'} image={'./macarons.avif'}/>
                  <Cookies type={'Prajitura'} price={'61 ron/kg'} image={'./macarons.avif'}/>
                  <Cookies type={'Prajitura'} price={'61 ron/kg'} image={'./macarons.avif'}/>
                  <Cookies type={'Prajitura'} price={'61 ron/kg'} image={'./macarons.avif'}/>
                  <Cookies type={'Prajitura'} price={'61 ron/kg'} image={'./macarons.avif'}/>
                  <Cookies type={'Prajitura'} price={'61 ron/kg'} image={'./macarons.avif'}/>
                  <Cookies type={'Prajitura'} price={'61 ron/kg'} image={'./macarons.avif'}/>
                  <Cookies type={'Prajitura'} price={'61 ron/kg'} image={'./macarons.avif'}/>
               </div>
               <p className="catalog-page__products-showcase__title">Brutarie</p>
               <hr className="horizontal-line"/>
               <p className="catalog-page__products-showcase__quote">Dragoste la prima muscatura!</p>
               <div className="catalog-page__products-showcase__bakery">
                  <Bakery type={'Placinta'} price={'12 ron'} image={'./bakery.avif'}/>
                  <Bakery type={'Placinta'} price={'12 ron'} image={'./bakery.avif'}/>
                  <Bakery type={'Placinta'} price={'12 ron'} image={'./bakery.avif'}/>
                  <Bakery type={'Placinta'} price={'12 ron'} image={'./bakery.avif'}/>
                  <Bakery type={'Placinta'} price={'12 ron'} image={'./bakery.avif'}/>
                  <Bakery type={'Placinta'} price={'12 ron'} image={'./bakery.avif'}/>
               </div>
               <div className="catalog-page__products-showcase__ice-cream">
                  <img src="./ice-cream.png" alt="ice cream"/>
                  <div className="catalog-page__products-showcase__ice-cream__info">
                     <p className="catalog-page__products-showcase__ice-cream__info__title">Inghetata de aia
                        buna</p>
                     <p className="catalog-page__products-showcase__ice-cream__info__message">Lorem ipsum dolor
                        sit amet, consectetur adipisicing elit. Dolor, ea?</p>
                     <div className="catalog-page__products-showcase__ice-cream__info__flavours">
                        cioco
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}