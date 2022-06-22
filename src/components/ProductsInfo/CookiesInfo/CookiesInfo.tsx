import CheckIcon from '../../../icons/CheckIcon'
import CookiesProps from './interface'


export default ({ composition, recommendation }: CookiesProps) => {
   return <div className="cookies-info">
      <div className="cookies-info__details">
         {composition.map(ingredient => {
            return <ul className="cookies-info__details__composition">
               <li><CheckIcon/>{ingredient}</li>
            </ul>
         })}
         <p className="cookies-info__details__recommendation">{recommendation}</p>
      </div>
   </div>
}