import BakeryProps from './interface'


export default ({type, price, image}: BakeryProps) => {
   return (
      <div className='bakery'>
         <div className='bakery__container'>
            <img src={image} alt='cake image' />
            <p className='bakery__container__type'>{type}</p>
            <p className='bakery__container__price'>{price}</p>
            <button className='bakery__container__button'>Află mai multe</button>
         </div>
      </div>
   )
}