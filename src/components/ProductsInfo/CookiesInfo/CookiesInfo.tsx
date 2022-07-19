import CheckIcon from '../../../icons/CheckIcon'
import TagIcon from '../../../icons/TagIcon'
import CookiesProps from './interface'


export default ({ composition, recommendation, price }: CookiesProps) => {
   return <div className="product-info">
      <div className="cookies-info__details">
         <div className="cookies-info__details__price"><TagIcon/>{price}</div>
         {composition.map((ingredient, id) => {
            return <ul key={id} className="cookies-info__details__composition">
               <li><CheckIcon/>{ingredient}</li>
            </ul>
         })}
         <p className="cookies-info__details__recommendation">{recommendation}</p>
      </div>
   </div>


}