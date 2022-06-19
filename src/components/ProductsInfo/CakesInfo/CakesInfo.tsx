import CheckIcon from '../../../icons/CheckIcon'
import CakeProps from './interface'


export default ({type, price, composition, recommendation}: CakeProps) => {
   return <div className='cake-info' onClick={(e) => e.stopPropagation()} >
      <div className="cake-info__photo">
         <img src={'./cake.avif'} alt='cake' />
      </div>
      <div className="cake-info__details">
         <p className='cake-info__details__title'>{type}</p>
         <p className="cake-info__details__price"><mark className='price'>Pret </mark>
            {price} lei/kg</p>
         <p className='cake-info__details__composition__title'>Compozitie </p>
         {composition.map(ingredient => {
            return <ul className="cake-info__details__composition">
               <li><CheckIcon /> {ingredient}</li>
            </ul> })}
         <p className="cake-info__details__recommendation">{recommendation}</p>
      </div>
   </div>
}