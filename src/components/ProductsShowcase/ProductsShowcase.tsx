import Bakery from '../Categories/Bakery'
import Cakes from '../Categories/Cakes'
import Cookies from '../Categories/Cookies'


export default () => {
   return (
      <div className="products-showcase">
            <p className='products-showcase__title'>Torturi</p>
            <hr className='horizontal-line' />
            <p className='products-showcase__quote'>O petrecere fara un tort este doar o intalnire!</p>
            <div className='products-showcase__cakes'>
               <Cakes type={'Tort insiropat'} price={'60 ron/kg'} image={'./cake.avif'} />
               <Cakes type={'Tort insiropat'} price={'60 ron/kg'} image={'./cake.avif'} />
               <Cakes type={'Tort insiropat'} price={'60 ron/kg'} image={'./cake.avif'} />
               <Cakes type={'Tort insiropat'} price={'60 ron/kg'} image={'./cake.avif'} />
               <Cakes type={'Tort insiropat'} price={'60 ron/kg'} image={'./cake.avif'} />
               <Cakes type={'Tort insiropat'} price={'60 ron/kg'} image={'./cake.avif'} />
               <Cakes type={'Tort insiropat'} price={'60 ron/kg'} image={'./cake.avif'} />
               <Cakes type={'Tort insiropat'} price={'60 ron/kg'} image={'./cake.avif'} />
               <Cakes type={'Tort insiropat'} price={'60 ron/kg'} image={'./cake.avif'} />
            </div>
         <p className='products-showcase__title'>Prajituri</p>
         <hr className='horizontal-line' />
         <p className='products-showcase__quote'>Viata e scurta, asa ca indulceste-o!</p>
         <div className='products-showcase__cookies'>
            <Cookies type={'Prajitura'} price={'61 ron/kg'} image={'./macarons.avif'} />
            <Cookies type={'Prajitura'} price={'61 ron/kg'} image={'./macarons.avif'} />
            <Cookies type={'Prajitura'} price={'61 ron/kg'} image={'./macarons.avif'} />
            <Cookies type={'Prajitura'} price={'61 ron/kg'} image={'./macarons.avif'} />
            <Cookies type={'Prajitura'} price={'61 ron/kg'} image={'./macarons.avif'} />
            <Cookies type={'Prajitura'} price={'61 ron/kg'} image={'./macarons.avif'} />
            <Cookies type={'Prajitura'} price={'61 ron/kg'} image={'./macarons.avif'} />
            <Cookies type={'Prajitura'} price={'61 ron/kg'} image={'./macarons.avif'} />
            <Cookies type={'Prajitura'} price={'61 ron/kg'} image={'./macarons.avif'} />
            <Cookies type={'Prajitura'} price={'61 ron/kg'} image={'./macarons.avif'} />
            <Cookies type={'Prajitura'} price={'61 ron/kg'} image={'./macarons.avif'} />
            <Cookies type={'Prajitura'} price={'61 ron/kg'} image={'./macarons.avif'} />
            <Cookies type={'Prajitura'} price={'61 ron/kg'} image={'./macarons.avif'} />
         </div>
         <p className='products-showcase__title'>Brutarie</p>
         <hr className='horizontal-line' />
         <p className='products-showcase__quote'>Dragoste la prima muscatura!</p>
         <div className="products-showcase__bakery">
            <Bakery type={'Placinta'} price={'12 ron'} image={'./bakery.avif'}/>
            <Bakery type={'Placinta'} price={'12 ron'} image={'./bakery.avif'}/>
            <Bakery type={'Placinta'} price={'12 ron'} image={'./bakery.avif'}/>
            <Bakery type={'Placinta'} price={'12 ron'} image={'./bakery.avif'}/>
            <Bakery type={'Placinta'} price={'12 ron'} image={'./bakery.avif'}/>
            <Bakery type={'Placinta'} price={'12 ron'} image={'./bakery.avif'}/>
         </div>
         <img src='./ice-cream.png' alt='ice cream' />
      </div>
   )
}

