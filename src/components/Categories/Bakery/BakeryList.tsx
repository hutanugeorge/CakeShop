import BakeryInfo from '../../ProductsInfo/BakeryInfo'
import Bakery from './index'
import {bakeryArray} from '../../constants/bakery'


export default () =>
   <div className={'bakery-list'}>
      {bakeryArray.map((pie) => {
         const {type, price, image, info: {composition, recommendation}} = pie
         return <Bakery
            type={type}
            price={`${price} ron/KG`}
            image={image}
            info={<BakeryInfo
               composition={composition}
               recommendation={recommendation}/>
            }
         />
      })}
   </div>