import CakesList from '../Categories/Cakes/CakesList'
import CandyBar from '../Categories/CandyBar'
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
         className={`products-showcase__cakes ${showCookies ? 'products-showcase__cakes__visible' : ''}`}>
         <CakesList/>
      </div>
      <div
         className={`products-showcase__cakes ${showBakery ? 'products-showcase__cakes__visible' : ''}`}>
         <CakesList/>
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