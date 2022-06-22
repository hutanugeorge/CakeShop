import { useState } from 'react'
import BakeryProps from './interface'


export default ({type, price, image, info}: BakeryProps) => {

   const [ visibleInfo, setVisibleInfo ] = useState<boolean>(false)

   return (
      <div className='bakery'>
         <div className={`bakery__container ${visibleInfo ? 'bakery__container__visible' : ''}`}>
            <img src={image} alt="cake image" onClick={() => setVisibleInfo(prev => !prev)}/>
            <p className="bakery__container__type" onClick={() => setVisibleInfo(prev => !prev)}>{type}</p>
            <p className="bakery__container__price">{price}</p>
            <button className="bakery__container__button" onClick={() => setVisibleInfo(prev => !prev)}>{visibleInfo ? 'Vezi mai putin' : 'Vezi mai multe'}
            </button>
            <div className={`bakery__container__info ${visibleInfo ? 'bakery__container__info-visible' : ''}`}>
               {info}
            </div>
         </div>
      </div>
   )
}