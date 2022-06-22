import { useState } from 'react'
import CakeProps from './interface'


export default ({ type, price, image, info }: CakeProps) => {

   const [ visibleInfo, setVisibleInfo ] = useState<boolean>(false)

   return (
      <div className='cakes'>
         <div className={`cakes__container ${visibleInfo ? 'cakes__container__visible' : ''}`}>
            <div className="cakes__container__primary-info">
            <img src={image} alt="cake image" onClick={() => setVisibleInfo(prev => !prev)}/>
            <p className="cakes__container__primary-info__type" onClick={() => setVisibleInfo(prev => !prev)}>{type}</p>
            <p className="cakes__container__primary-info__price">{price}</p>
            <button className="cakes__container__primary-info__button" onClick={() => setVisibleInfo(prev => !prev)}>{visibleInfo ? 'Vezi mai putin' : 'Vezi mai multe'}
            </button>
            </div>
            <div className={`cakes__container__info ${visibleInfo ? 'cakes__container__info-visible' : ''}`}>
               {info}
            </div>
         </div>
      </div>
   )
}