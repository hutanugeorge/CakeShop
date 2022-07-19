import { useState } from 'react'
import BottomArrowIcon from '../../../icons/BottomArrowIcon'
import TopArrowIcon from '../../../icons/TopArrowIcon'
import CookiesProps from './interface'


export default ({ type, image, info }: CookiesProps) => {

   const [ visibleProducts, setVisibleProducts ] = useState<boolean>(false)
   const [ visibleInfo, setVisibleInfo ] = useState<boolean>(false)

   return (
      <div className="category">
         <div
            className={`category__container ${visibleProducts ? 'category__container__visible' : ''}`}>
            <div className="category__container__primary-info">
               <div className="category__container__primary-info__image">
                  <div className="category__container__primary-info__image__wrapper">
                     <div
                        className={`category__container__primary-info__image__wrapper__card ${visibleInfo ? 'category__container__primary-info__image__wrapper__card__visible-info' : ''}`}>
                        <img src={image} alt="photo"/>
                        <div
                           className="category__container__primary-info__image__wrapper__card__descriptions">
                           <h1>Lorem ipsum.</h1>
                           <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
                              voluptates? </p>
                        </div>
                     </div>
                  </div>
               </div>
               <p className="category__container__primary-info__type"
                  onClick={() => setVisibleProducts(prev => !prev)}>{type}</p>
               <button className="category__container__primary-info__button"
                       onClick={() => setVisibleInfo(prev => !prev)}>{visibleInfo ?
                  <BottomArrowIcon/> : <TopArrowIcon/>}
               </button>
            </div>
            <div
               className={`category__container__info ${visibleProducts ? 'category__container__info-visible' : ''}`}>
               {info}
            </div>
         </div>
      </div>

   )
}

