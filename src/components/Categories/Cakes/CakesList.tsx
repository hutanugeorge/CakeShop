import CakesInfo from '../../ProductsInfo/CakesInfo'
import Cake from './Cakes'
import {cakesArray} from "../../constants/cakes";


export default () =>
    <div className={'cake-list'}>
      {cakesArray.map((cake) => {
         const {type, price, image, info: {composition, recomandation}} = cake
         return <Cake
             type={type}
             price={`${price} ron/KG`}
             image={image}
             info={<CakesInfo
                 composition={composition}
                 recommendation={recomandation}/>
         }
         />
      })}
   </div>

