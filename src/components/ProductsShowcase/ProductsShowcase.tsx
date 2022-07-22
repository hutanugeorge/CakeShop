import BakeryList from '../Categories/Bakery/BakeryList'
import CakesList from '../Categories/Cakes/CakesList'
import CandyBar from '../Categories/CandyBar'
import CookiesList from '../Categories/Cookies/CookiesList'
import ImageSlider from '../ImageSlider'
import ScrollUp from '../ScrollUp'
import ProductsProps from './interface'


export default ({ showCakes, showCookies, showBakery, showIceCream, showCandyBar }: ProductsProps) => {

   const iceCreamImagesSlides = [
      { url: './iceCream1.jpg', title: 'Pepene galben & Ciocolata' },
      { url: './iceCream2.jpg', title: 'Pepene galben' },
      { url: './iceCream3.jpg', title: 'Capsuni' }
   ]

   return <div className="products-showcase" >
      <ScrollUp/>
      <div
         className={`products-showcase__cakes ${showCakes ? 'products-showcase__cakes__visible' : ''}`}>
         <CakesList/>
      </div>
      <div
         className={`products-showcase__cookies ${showCookies ? 'products-showcase__cookies__visible' : ''}`}>
         <CookiesList/>
      </div>
      <div
         className={`products-showcase__bakery ${showBakery ? 'products-showcase__bakery__visible' : ''}`}>
         <BakeryList/>
      </div>
      <div
         className={`products-showcase__ice-cream ${showIceCream ? 'products-showcase__ice-cream__visible' : ''}`}>
         <div className="products-showcase__ice-cream__image-slides">
            <ImageSlider slides={iceCreamImagesSlides}/>
         </div>
         <div className="products-showcase__ice-cream__info">
            <p className="products-showcase__ice-cream__info__title">Inghetata
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum laboriosam
               qui recusandae rem tenetur. Aut deserunt in laudantium numquam
               repellendus.</p>
            <div className="products-showcase__ice-cream__info__prices">
               <p className="products-showcase__ice-cream__info__prices__element">Cornet
                  6 lei</p>
               <p className="products-showcase__ice-cream__info__prices__element">Pahar
                  mic 8 lei</p>
               <p className="products-showcase__ice-cream__info__prices__element">Pahar
                  mare 10 lei</p>
            </div>
         </div>
      </div>
      <div
         className={`products-showcase__candy-bar ${showCandyBar ? 'products-showcase__candy-bar__visible' : ''}`}>
         <CandyBar/>
      </div>
   </div>
}