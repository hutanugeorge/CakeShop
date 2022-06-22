import { useState } from 'react'
import CookiesProps from './interface'


export default ({type, price, image, info}: CookiesProps) => {

   const [ visibleInfo, setVisibleInfo ] = useState<boolean>(false)

   return (
      <div className='cookies'>
         <div className={`cookies__container ${visibleInfo ? 'cookies__container__visible' : ''}`}>
            <img src={image} alt="cake image" onClick={() => setVisibleInfo(prev => !prev)}/>
            <p className="cookies__container__type" onClick={() => setVisibleInfo(prev => !prev)}>{type}</p>
            <p className="cookies__container__price">{price}</p>
            <button className="cookies__container__button" onClick={() => setVisibleInfo(prev => !prev)}>{visibleInfo ? 'Vezi mai putin' : 'Vezi mai multe'}
            </button>
            <div className={`cookies__container__info ${visibleInfo ? 'cookies__container__info-visible' : ''}`}>
               {info}
            </div>
         </div>
      </div>
   )
}