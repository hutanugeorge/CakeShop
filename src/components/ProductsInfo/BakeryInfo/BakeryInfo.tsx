import CheckIcon from '../../../icons/CheckIcon'
import BakeryProps from './interface'


export default ({ composition, recommendation }: BakeryProps) => {
   return <div className="bakery-info">
      <div className="bakery-info__details">
         {composition.map(ingredient => {
            return <ul className="bakery-info__details__composition">
               <li><CheckIcon/>{ingredient}</li>
            </ul>
         })}
         <p className="bakery-info__details__recommendation">{recommendation}</p>
      </div>
   </div>
}