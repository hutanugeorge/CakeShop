import BakeryInfo from '../../ProductsInfo/BakeryInfo'
import Bakery from './Bakery'
import { bakeryArray } from '../../constants/bakery'


export default () =>
   <div className="category-list">
      {bakeryArray.map((bakery, id) => {
         const { type, image, info: { composition, recommendation, price } } = bakery
         return <Bakery
            key={id}
            type={type}
            image={image}
            info={<BakeryInfo
               composition={composition}
               recommendation={recommendation}
               price={`${price}`}/>
            }
         />
      })}
   </div>

