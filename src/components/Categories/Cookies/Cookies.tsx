import CookiesProps from './interface'


export default ({type, price, image}: CookiesProps) => {
   return (
      <div className='cookies'>
         <div className='cookies__container'>
            <img src={image} alt='cake image' />
            <p className='cookies__container__type'>{type}</p>
            <p className='cookies__container__price'>{price}</p>
            <button className='cookies__container__button'>Află mai multe</button>
         </div>
      </div>
   )
}