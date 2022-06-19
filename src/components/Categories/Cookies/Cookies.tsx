import CookiesProps from './interface'
import { useParams } from 'react-router-dom'


export default ({type, price, image, path}: CookiesProps) => {


   return (
      <div className='cookies' onClick={() => window.location.pathname = `/catalog/${path}` }>
         <div className='cookies__container'>
            <img src={image} alt='cake image' />
            <p className='cookies__container__type'>{type}</p>
            <p className='cookies__container__price'>{price}</p>
            <button className='cookies__container__button'>Află mai multe</button>
         </div>
      </div>
   )
}