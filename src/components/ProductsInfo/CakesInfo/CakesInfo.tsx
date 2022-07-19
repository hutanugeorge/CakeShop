import CheckIcon from '../../../icons/CheckIcon'
import TagIcon from '../../../icons/TagIcon'
import CakeProps from './interface'


export default ({ composition, recommendation, price }: CakeProps) => {
   return <div className="product-info">
      <div className="cake-info__details">
         <div className="cake-info__details__price"><TagIcon/>{price}</div>
         {composition.map( (ingredient, id)  => {
            return <ul key={id} className="cake-info__details__composition">
               <li><CheckIcon/>{ingredient}</li>
            </ul>
         })}
         <p className="cake-info__details__recommendation">{recommendation}</p>
      </div>
   </div>


}