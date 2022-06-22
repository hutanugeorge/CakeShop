import CheckIcon from '../../../icons/CheckIcon'
import CakeProps from './interface'


export default ({ composition, recommendation }: CakeProps) => {
   return <div className="cake-info">
      <div className="cake-info__details">
         {composition.map(ingredient => {
            return <ul className="cake-info__details__composition">
               <li><CheckIcon/>{ingredient}</li>
            </ul>
         })}
         <p className="cake-info__details__recommendation">{recommendation}</p>
      </div>
   </div>
}