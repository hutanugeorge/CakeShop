import CheckIcon from '../../../icons/CheckIcon'
import TagIcon from '../../../icons/TagIcon'
import CakeProps from './interface'


export default ({ composition, recommendation, price }: CakeProps) => {
   return  <div className="product-info">
      <div className="product-info__details">
         <div className="product-info__details__price"><TagIcon/>{price}</div>
         <div className="product-info__details__composition__wrapper">
            {composition.map((ingredient, id) => {
               return <div key={id} className="product-info__details__composition">
                  <div>
                     <CheckIcon/>
                     <p>{ingredient}</p>
                  </div>
               </div>
            })}
         </div>
         <p className="product-info__details__recommendation">{recommendation}</p>
      </div>
   </div>
}