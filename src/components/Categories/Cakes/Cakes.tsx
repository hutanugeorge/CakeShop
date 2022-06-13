import CakeProps from './interface';

export default ({type, price, image}: CakeProps) => {
   return (
      <div className='cakes'>
         <div className='cakes__container'>
            <img src={image} alt='cake image' />
            <h4 className='cakes__container__type'>{type}</h4>
            <p className='cakes__container__price'>{price}</p>
            <button className='cakes__container__button'>Află mai multe</button>
         </div>
      </div>
   )
}