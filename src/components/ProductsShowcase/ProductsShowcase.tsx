import BakeryList from '../Categories/Bakery/BakeryList'
import CakesList from '../Categories/Cakes/CakesList'
import CandyBar from '../Categories/CandyBar'
import CookiesList from '../Categories/Cookies/CookiesList'
import IceCream from '../Categories/IceCream'
import ScrollUp from '../ScrollUp'
import ProductsProps from './interface'


export default ({ showCakes, showCookies, showBakery, showIceCream, showCandyBar }: ProductsProps) => {

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
         <IceCream />
      </div>
      <div
         className={`products-showcase__candy-bar ${showCandyBar ? 'products-showcase__candy-bar__visible' : ''}`}>
         <CandyBar/>
      </div>
   </div>
}